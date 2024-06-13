const s = (m: number): number => Math.floor(Math.random() * (m + 1));

const seniorCOLOR = (method: "RGB" | "HEX" | "HSL" = "HEX"): string => {
  let c: string = "";
  switch (method.toLowerCase()) {
    case "hex":
      c += "#";
      for (let i = 0; i < 6; i++) {        
        c += "ABCDEF0123456"[s(12)];
      }
      break;
    case "rgb":
      c = `rgb(${s(255)}, ${s(255)}, ${s(255)})`;
      break;
    case "hsl":
      c = `hsl(${s(360)}, 100%, 50%)`;
      break;
    default:
      console.error("Please use a valid color value method");
      break;
  }
  return c;
};

export default seniorCOLOR;
