import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import loaderWhiteRed from './img/loader-white-red.svg';
import loaderBlack from './img/loader-black.svg';
import loaderBlue from './img/loader-blue.svg';

import styles from './UiLoading.module.css';




const UiLoading = ( {
    theme = 'white-red'
} ) => {

    const [loaderIcon, setLoaderIcon] = useState( null );

    useEffect( () => {
        switch ( theme ) {
            case 'black': setLoaderIcon( loaderBlack ); break;
            case 'white-red': setLoaderIcon( loaderWhiteRed ); break;
            case 'blue': setLoaderIcon( loaderBlue ); break;
            default: setLoaderIcon(loaderWhiteRed);
        }
    }, [] );
    
    return (
        <>
            <img
                className={ styles.loader }
                src={ loaderIcon }
                alt="Loader"
                />
        </>
    )
};


UiLoading.propTypes = {
    theme: PropTypes.string
}


export default UiLoading;