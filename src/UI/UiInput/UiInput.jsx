import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import cross from './img/cross.svg';
import styles from './UiInput.module.css';



const UiInput = ( { value, handleInputChange, placeholder, classes } ) => {
    
    const clearInput = () => {
        if ( value ) {
            handleInputChange('')
        }
    }
    return (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
                type="text"
                placeholder={placeholder}
                value={ value }
                onChange={ (e) => handleInputChange(e.target.value) }
                className={styles.input}
            />
                <img
                    onClick={ clearInput }
                    src={ cross }
                    className={ cn( styles.clear, value && styles.clear__disabled ) }
                    alt="clear"
                />
        </div>
    )
};

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    classes: PropTypes.string,
    placeholder: PropTypes.string
}




export default UiInput;