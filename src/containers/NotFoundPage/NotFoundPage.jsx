import React from 'react';
import { useLocation } from 'react-router';
import styles from './NotFoundPage.module.css';



const NotFoundPage = () => {
    let location = useLocation();
    return (
        <>
            <h1 className={ styles.found }>404 Not Found</h1>
            <p className={styles.location}>No match for <u>{ location.pathname}</u></p>
        </>
    )
};


export default NotFoundPage;