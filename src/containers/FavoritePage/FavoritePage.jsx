import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import styles from './FavoritePage.module.css';




const FavoritePage = () => {
    const [people, setPeople] = useState( [] );

    const storeData = useSelector( state => state.favoriteReducer );

    useEffect( () => {
        const arr = Object.entries( storeData );
        // когда данные есть
        if (arr.length) {
            const res = arr.map( item => {
                return {
                    id: item[0],
                    // name: item[1].name,
                    // img: item[1].img
                    ...item[1]
                };
            } );

            setPeople( res );
            
        }

    }, [] );

    return (
        <>
            <h1 className="header__text">FavoritePage</h1>
            {
                people.length
                    ? <PeopleList people={ people } />
                    : <h2 className={styles.comment}>No data</h2>
            }
            
        </>
    )
};


export default FavoritePage;