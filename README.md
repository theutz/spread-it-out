# Spread It Out

A super-simple function that takes in a color and spreads it out to lighter and darker values.

## API

    spreadItOut(color, magnitude = 0.1, numberOfResults = 0);

## Basic Example

    import spreadItOut from 'spread-it-out'

    const colors = spreadItOut('##71b82c');

    // Returns the following:
    //[
    //  "#71b82c", <--- the original color
    //  "#eef6e5", <--- the lightest variant
    //  "#d8e4cb",
    //  "#c2d1b2",
    //  "#acbf98",
    //  "#96ad7f",
    //  "#7f9a65",
    //  "#69884b",
    //  "#537532",
    //  "#3d6318"  <--- the darkest variant
    // ]

## Advanced Examples

### With Magnitude

Magnitude affects the range of variants. A magnitude of `0` means the range will go all the way from `#ffffff` to `#000000`. A magnitude of `1` means there will be no variation at all.

    import spreadItOut from 'spread-it-out'

    const colors = spreadItOut(`#71b82c`, 0.05);

    // Returns the following:
    // [
    //    "#71b82c", <--- the original color
    //    "#f7fbf2", <--- the lightest variant (modified by the magnitude)
    //    "#dee4d6",
    //    "#c4ceba",
    //    "#abb79e",
    //    "#91a182",
    //    "#788a65",
    //    "#5e7349",
    //    "#455d2d",
    //    "#2b4611"  <--- the darkest variant (modified by the magnitude)
    // ]

### With Different Number of Results

The number of results includes the original color.

    import spreadItOut from 'spread-it-out'

    const colors = spreadItOut(`#71b82c`, undefined, 6);

    // Returns the following:
    // [
    //   "#71b82c", <--- the original color
    //   "#f7fbf2", <--- the lightest variant
    //   "#c4ceba",
    //   "#91a182",
    //   "#5e7349",
    //   "#2b4611"  <--- the darkest variant
    // ]

## Acknowledgements

This whole thing is made with the help of the excellent [chroma-js](https://github.com/gka/chroma.js/) library.
