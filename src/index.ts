import seniorINT from "@ssts/int";

/**
 * Generates a random color and returns it.
 * @param {number} method - "RGB", "HEX" or "HSL". Default is "HEX"
 * @param {number} opacity - Must be between 0 and 1
 * @returns {string} color
 * @throws TypeError if the method is not one of these values "RGB" | "HEX" | "HSL"
 * @throws TypeError if the opacity is NaN
 * @throws RangeError if the opacity is less than 0 or greater than 1
 * 
 * @example
 * import randomColor from "@ssts/color";
 * const color = randomColor();
 * 
 * console.log(color);
 * // Log example: '#25ECAD'
 */
const seniorCOLOR = (method: "RGB" | "HEX" | "HSL" = "HEX", opacity?: number): string => {
  if (opacity != undefined) {
    if (typeof opacity !== "number") throw new TypeError("opacity must be a number");
    else if (opacity < 0 || opacity > 1) throw new RangeError(`Invalid opacity value: ${opacity}. Must be between 0 and 1`);
  }

  let color: string = "";
  switch (method.toLowerCase()) {
    case "hex":
      color += "#";
      for (let i = 0; i < 6; i++) {        
        color += "ABCDEF0123456"[seniorINT(0, 12)];
      }
      if (opacity != undefined) {
        color += Math.round(opacity * 255).toString(16).padStart(2, "0").toUpperCase();
      }
      break;
    case "rgb":
      color = opacity == undefined ? `rgb(${seniorINT(0, 255)}, ${seniorINT(0, 255)}, ${seniorINT(0, 255)})` : `rgba(${seniorINT(0, 255)}, ${seniorINT(0, 255)}, ${seniorINT(0, 255)}, ${opacity})`;
      break;
    case "hsl":
      color = opacity == undefined ? `hsl(${seniorINT(0, 360)}, 100%, 50%)` : `hsla(${seniorINT(0, 360)}, 100%, 50%, ${opacity})`;
      break;
    default:
      console.warn("Please use a valid method");
      throw new TypeError(`Invalid method: "${method}". Please use RGB, HEX or HSL`);
  }
  return color;
};

declare global {
  interface Window {
    ssts: any;
  }
}
if (typeof window !== "undefined") {
  if (typeof window.ssts !== "object") window.ssts = {};
  window.ssts.seniorCOLOR = seniorCOLOR;
};

export default seniorCOLOR;
