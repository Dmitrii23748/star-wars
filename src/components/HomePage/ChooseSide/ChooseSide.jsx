import React from 'react';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '../../../context/ThemeProvider';
import cn from 'classnames';
import imgLight from './img/light.jpg';
import imgDark from './img/dark.jpg';
import imgNeitral from './img/neitral.jpg';
import PropTypes from 'prop-types';
import styles from './ChooseSide.module.css';




const ChooseSideItem = ({ onClick, text, img, classes }) => {
    return (
        <div
            className={ cn ( styles.item, classes) }
            onClick={onClick}
        >
            <div className={ styles.item__header }>{ text }</div>
            <img className={ styles.item__img } src={ img } alt={ text } />
        </div>
    );
};

ChooseSideItem.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string
}






const ChooseSide = () => {
    const isTheme = useTheme();

    return (
        <div className={styles.container}>
            <ChooseSideItem
                onClick={ () => isTheme.change( THEME_LIGHT ) }
                text="Light Side"
                img={ imgLight }
                classes={styles.item__light}
            />

            <ChooseSideItem
                onClick={ () => isTheme.change( THEME_DARK ) }
                text="Dark Side"
                img={ imgDark }
                classes={styles.item__dark}
            />
            
            <ChooseSideItem
                onClick={ () => isTheme.change( THEME_NEITRAL ) }
                text="Neitral Side"
                img={ imgNeitral }
                classes={styles.item__neitral}
            />
        </div>
    )
};


export default ChooseSide;