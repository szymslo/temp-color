/**
 * @typedef {Object} Color
 * @property {number} r - R value
 * @property {number} g - G value
 * @property {number} b - B value
 */

/**
 * Converts temperature to a RGB color
 * @param {number} t value that will be scaled into RGB
 * @param {number} min lowest possible value; scale begins there
 * @param {number} max highest possible value; scale ends there
 * @param {string} mode default or 'extended' or 'half' color scaling
 * @returns {Color} object with calculated RGB values
 */
export declare function tempToColor(t: number, min: number, max: number, mode?: string): {
    r: number;
    g: number;
    b: number;
};
