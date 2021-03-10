# Temperature To Color

![rgbspectrum](https://user-images.githubusercontent.com/52113159/110655867-b926da80-81bf-11eb-8f0f-44fe82f4129f.jpg)

### Convert temperature, or any other quantity, to RGB color

# Installation

`npm i temp-color`

# Parameters and return type

```tempToColor = (t: number, min: number, max: number) : {r: number, g: number, b: number}```

### Function _tempToColor_ takes three parameters:
* __t__ - value that will be scaled into RGB
* __min__ - lowest possible value (scale begins there)
* __max__ - highest possible value (scale ends there)

### Function _tempToColor_ returns an object with calculated RGB values

# Usage

```
import { tempToColor } from 'temp-color';

const { r, g, b } = tempToColor(10, -30, 30);
```
