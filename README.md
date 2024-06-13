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

| Order |  Parameter  |           Type           | Default |
| :---: | :---------: | :----------------------: | :-----: |
|   1   |   method    |  "RGB" \| "HEX" \| "HSL" |  "HEX"  |

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
```

| Order |        Code        |       Result        |                                  Color                                    |
| :---: | :----------------: | :-----------------: | :-----------------------------------------------------------------------: |
|   1   |   seniorCOLOR()    |       #25ECAD       |      <div style="background:#25ECAD;width:20px;height:20px"></div>        |
|   2   |   seniorCOLOR()    |       #EF0FFA       |      <div style="background:#EF0FFA;width:20px;height:20px"></div>        |
|   3   | seniorCOLOR("HEX") |       #0C4DC0       |      <div style="background:#0C4DC0;width:20px;height:20px"></div>        |
|   4   | seniorCOLOR("RGB") |  rgb(76, 69, 197)   |  <div style="background:rgb(76, 69, 197);width:20px;height:20px"></div>   |
|   5   | seniorCOLOR("RGB") |  rgb(64, 247, 71)   |  <div style="background:rgb(64, 247, 71);width:20px;height:20px"></div>   |
|   6   | seniorCOLOR("RGB") |  rgb(254, 78, 233)  |  <div style="background:rgb(254, 78, 233);width:20px;height:20px"></div>  |
|   7   | seniorCOLOR("HSL") | hsl(45, 100%, 50%)  | <div style="background:hsl(45, 100%, 50%);width:20px;height:20px"></div>  |
|   8   | seniorCOLOR("HSL") | hsl(251, 100%, 50%) | <div style="background:hsl(251, 100%, 50%);width:20px;height:20px"></div> |
|   9   | seniorCOLOR("HSL") | hsl(160, 100%, 50%) | <div style="background:hsl(160, 100%, 50%);width:20px;height:20px"></div> |

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