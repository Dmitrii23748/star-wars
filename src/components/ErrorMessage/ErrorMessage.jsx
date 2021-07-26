import React from 'react';
import UiVideo from '../../UI/UiVideo/UiVideo';
import starVideo from './video/starWars.mp4';
import styles from './ErrorMessage.module.css';



const ErrorMessage = () => {
    return (
        <div className={styles.thumb}>
            <p className={ styles.text }>Такой страницы не существует</p>
            <UiVideo
                src={ starVideo }
                playbackRate={2.0}
                classes={styles.video}
            />
        </div>
    )
};


export default ErrorMessage;