import React from 'react';
import { useHistory } from 'react-router-dom';
import iconBack from './img/back.svg';
import styles from './PersonLinkBack.module.css';


const PersonLinkBack = () => {

    const history = useHistory();
    const handlerGoBack = ( e ) => {
        e.preventDefault();
        history.goBack()
    };

    return (
        <a
            href="#"
            onClick={ handlerGoBack }
            className={styles.link}
        >
            <img className={ styles.link__img } src={ iconBack } alt="back"/>
            <span>Go Back</span>
        </a>
    )
};


export default PersonLinkBack;