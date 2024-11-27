# Create random colors: RGB, HEX or HSL

One **straight** *forward* ***function*** ~~that~~ <mark>returns</mark> <sup>a</sup> <sub>random</sub> `color` | **RGB,** **HEX** or **HSL** 😍

## Install
```shell
npm i @ssts/color
```
## Import
```js
import seniorCOLOR from "@ssts/color";
```
## Use
```ts
const randomColor: string = seniorCOLOR();
```

## Arguments
> Returns a string

| Order |  Parameter  |           Type           | Default  |
| :---: | :---------: | :----------------------: | :------: |
|   1   |   method    |  "RGB" \| "HEX" \| "HSL" |  "HEX"   |
|   2   |   opacity   |          number          | optional |

## Examples

```ts
import seniorCOLOR from "@ssts/color";

console.log(seniorCOLOR());         // '#25ECAD'
console.log(seniorCOLOR());         // '#EF0FFA'
console.log(seniorCOLOR("HEX"));    // '#0C4DC0'
console.log(seniorCOLOR("RGB"));    // 'rgb(76, 69, 197)'
console.log(seniorCOLOR("RGB"));    // 'rgb(64, 247, 71)'
console.log(seniorCOLOR("RGB"));    // 'rgb(254, 78, 233)'
console.log(seniorCOLOR("HSL"));    // 'hsl(45, 100%, 50%)'
console.log(seniorCOLOR("HSL"));    // 'hsl(251, 100%, 50%)'
console.log(seniorCOLOR("HSL"));    // 'hsl(160, 100%, 50%)'

// With opacity
console.log(seniorCOLOR("HEX", 0.5));     // '#14B30680'
console.log(seniorCOLOR("RGB", 0.65));    // 'rgba(10, 220, 231, 0.65)'
console.log(seniorCOLOR("HSL", 0.7));     // 'hsla(284, 100%, 50%, 0.7)'

```

___
---
---
---
***
>   Made With Chocolate By Senior Sedo 😎
>>  Be Chocolateful 💙😍
>>
>>  **ssts** stands for **s**enior-**s**edo-**t**ype**s**cript 💙
>>
>>  So instead of ~~@senior-sedo-typescript/rand-color~~
>>> `@ssts/color` for simplicity sake 😍
***
---
---
---
___