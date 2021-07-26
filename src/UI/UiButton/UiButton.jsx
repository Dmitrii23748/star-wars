import React from 'react';
import { PropTypes } from 'prop-types';
import cn from 'classnames';
import '../index.css';
import styles from './UiButton.module.css';




const UiButton = ( {
    text,
    onClickUi,
    disabled,
    theme = "dark",
    classes
} ) => {
    return (
        <>
            <button
                className={cn(styles.button, styles[theme], classes)}
                onClick={ onClickUi }
                disabled={disabled}
                >{text}
            </button>
        </>
    )
};


UiButton.propTypes = {
    text: PropTypes.string,
    onClickUi: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}



export default UiButton;