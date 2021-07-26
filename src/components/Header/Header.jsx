import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import imgLight from './img/light.svg';
import imgNeitral from './img/neitral.svg';
import imgDark from './img/dark.svg';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '../../context/ThemeProvider';
import styles from './Header.module.css';



const Header = () => {

    const [icon, setIcon] = useState( imgNeitral );
    
    const isTheme = useTheme();

    useEffect( () => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon( imgLight );
                break;
            case THEME_DARK: setIcon( imgDark );
                break;
            case THEME_NEITRAL: setIcon( imgNeitral );
                break;
            default: setIcon( imgNeitral );
        };
    }, [isTheme] );

    return (
        <div className={ styles.container }>
            <img className={ styles.logo } src={ icon } alt="starwars"/>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found" exact>Not Found</NavLink></li>
                <li><NavLink to="/search" exact>Search</NavLink></li>
                <li><NavLink to="/fail" exact>Fail</NavLink></li>
            </ul>
            <Favorite/>
        </div>
    )
};


export default Header;