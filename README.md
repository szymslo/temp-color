# Temperature To Color

![rgbspectrum](https://user-images.githubusercontent.com/52113159/110655867-b926da80-81bf-11eb-8f0f-44fe82f4129f.jpg)

### Convert temperature, or any other quantity, to a RGB color

## Installation

`npm i temp-color`

## Usage

```
import { tempToColor } from 'temp-color';

const { r, g, b } = tempToColor(10, -30, 30);
```
## Parameters

```tempToColor = (t: number, min: number, max: number) : {r: number, g: number, b: number}```

### Function takes three parameters:
* _t_ - value that will be scaled into RGB
* _min_ - lowest possible value (scale begins there)
* _max_ - highest possible value (scale ends there)

### Function returns an object with calculated RGB values
