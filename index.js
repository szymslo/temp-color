function tempToColor(t, min, max) {

    if (!Number.isFinite(t) || !Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError('function tempToColor() expected only numbers');
    } else if (min > max) {
        throw new Error('minimum cannot be greater than maximum');
    } else if (t < min) {
        t = min;
    } else if (t > max) {
        t = max;
    }

    const nT = (t - min) / (max - min);
    const regions = [1 / 6, (1 / 6) * 2, (1 / 6) * 3, (1 / 6) * 4, (1 / 6) * 5];
    let rValue = 255,
        gValue = 255,
        bValue = 255;

    switch (true) {
        case (nT <= regions[0]):
            rValue = 255;
            gValue = 0;
            bValue = 6 * nT * 255.999;
            break;

        case (nT > regions[0] && nT <= regions[1]):
            rValue = Math.abs(512 - (6 * nT * 255.999));
            gValue = 0;
            bValue = 255;
            break;

        case (nT > regions[1] && nT <= regions[2]):
            rValue = 0;
            gValue = Math.abs(512 - (6 * nT * 255.999));
            bValue = 255;
            break;

        case (nT > regions[2] && nT <= regions[3]):
            rValue = 0;
            gValue = 255;
            bValue = Math.abs(512 - (6 * (1 - nT) * 255.999));
            break;

        case (nT > regions[3] && nT <= regions[4]):
            rValue = Math.abs(512 - (6 * (1 - nT) * 255.999));
            gValue = 255;
            bValue = 0;
            break;

        case (nT > regions[4]):
            rValue = 255;
            gValue = 6 * (1 - nT) * 255.999;
            bValue = 0;
            break;
    }

    return {
        r: Math.trunc(rValue),
        g: Math.trunc(gValue),
        b: Math.trunc(bValue),
    }
}

module.exports.tempToColor = tempToColor;