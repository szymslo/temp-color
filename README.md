# Temperature To Color

Convert temperature, or any other quantity, to RGB color

# Installation

`npm i temp-color`

# Parameters and return type

```tempToColor = (t: number, min: number, max: number) : {r: number, g: number, b: number}```

Function takes three parameters:
t - value that will be scaled into RGB
min - lowest possible value (scale begins there)
max - highest possible value (scale ends there)

Function returns an object with calculated RGB values

# Usage

```
import { tempToColor } from 'temp-color';

const { r, g, b } = tempToColor(10, -30, 30);

```