# Temperature To Color

![rgbspectrum](https://user-images.githubusercontent.com/52113159/110655867-b926da80-81bf-11eb-8f0f-44fe82f4129f.jpg)

### Convert temperature, or any other quantity, to a RGB color

## Installation

`npm i temp-color`

`yarn add temp-color`

## Usage

```js
import { tempToColor } from 'temp-color';

const { r, g, b } = tempToColor(10, -30, 30);
```
## Parameters

```
tempToColor = (t: number, min: number, max: number) : {r: number, g: number, b: number}
```

### Function takes three parameters:
* _t_ - value that will be scaled into RGB
* _min_ - lowest possible value (scale begins there)
* _max_ - highest possible value (scale ends there)

#### Function returns an object with calculated RGB values

## Examples

#### Change background dynamically based on a value set by a range slider

```js
import {tempToColor} from 'temp-color';

let isHeld = false;
const box = document.querySelector("#box");
const slider = document.querySelector("#slider")

slider.addEventListener('mousedown', () => {
    isHeld = true;
});

slider.addEventListener('mouseup', () => {
    isHeld = false;
});

slider.addEventListener('mousemove', () => {
    if (isHeld) {
        const {r,g,b} = tempToColor(parseFloat(slider.value), parseInt(slider.min), parseInt(slider.max));
        box.style.background = `rgb(${r},${g},${b})`;
    }
});

```
