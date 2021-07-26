

export const changeCssWarible = theme => {
    const root = document.querySelector( ':root' );

    // root.style.setProperty( '--theme-default-header', `var(--theme-${ theme }-header)` );
    // root.style.setProperty( '--theme-default-image', `var(--theme-${theme}-image)` );

    const cssVaribles = ['header', 'image'];

    cssVaribles.forEach( element => {
        root.style.setProperty(
            `--theme-default-${ element }`,
            `var(--theme-${ theme }-${ element })`
        );
    } );

};