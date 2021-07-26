import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '../../../UI/UiButton/UiButton';
import styles from './PeopleNavigation.module.css';



const PeopleNavigation = ( { getResource, prevPage, nextPage, counterPage } ) => {
    
    const handleChahgePrev = () => {
        getResource(prevPage)
    }
    const handleChahgeNext = () => {
        getResource(nextPage)
    }
    return (
        <div className={styles.container}>
            <Link to={ `/people/?page=${ counterPage - 1 }` } className={ styles.buttons }>
                <UiButton
                    text="Previous"
                    onClickUi={ handleChahgePrev }
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
                <UiButton
                    text="Next"
                    onClickUi={ handleChahgeNext }
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
};


PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}


export default PeopleNavigation;