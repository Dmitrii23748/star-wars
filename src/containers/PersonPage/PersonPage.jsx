// информация об отдельном персонаже
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiResource } from '../../utils/network';
import { getPeopleImg } from '../../services/getPeopleData';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import UiLoading from '../../UI/UiLoading/UiLoading';
import styles from './PersonPage.module.css';

const PersonFilms = React.lazy( () => import( '../../components/PersonPage/PersonFilms/PersonFilms' ) );


const PersonPage = ( { match, setErrorApi } ) => {
    
    const [personId, setPersonId] = useState( null );
    const [personInfo, setPersonInfo] = useState( null );
    const [personName, setPersonName] = useState( null );
    const [personPhoto, setPersonPhoto] = useState( null );
    const [personFilms, setPersonFilms] = useState( null );
    const [personFavorite, setPersonFavorite] = useState( false );

    const storeData = useSelector( state => state.favoriteReducer );

    useEffect( () => {
        ( async () => {
            const id = match.params.id;
            const res = await getApiResource( `${ API_PERSON }/${ id }/` );

            storeData[id] ? setPersonFavorite( true ) : setPersonFavorite( false );

            setPersonId( id );

            if ( res ) {
                setPersonInfo( [
                    { title: 'Birth_year', data: res.birth_year },
                    { title: 'Height', data: res.height },
                    { title: 'Eye_color', data: res.eye_color },
                    { title: 'Hair_color', data: res.hair_color },
                    { title: 'Mass', data: res.mass },
                    { title: 'Skin_color', data: res.skin_color },
                    { title: 'Gender', data: res.gender }
                ] );
                setPersonName( res.name );
                setPersonPhoto( getPeopleImg( id ) );

                if ( res.films.length > 0 ) {
                    setPersonFilms(res.films);
                };

                setErrorApi( false );
            } else {
                setErrorApi( true );
            }
        } )();
    }, [] );

    return (
        <>
            <PersonLinkBack />
            <div className={ styles.wrapper }>
                <span className={ styles.person__name }>{ personName }</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto = { personPhoto }
                        personName = { personName }
                        personId={ personId }
                        personFavorite={ personFavorite }
                        setPersonFavorite={ setPersonFavorite }
                        
                        />
                    { personInfo ? ( <PersonInfo personInfo={ personInfo } /> ) : null }
                    { personFilms
                        ?
                        <Suspense
                            fallback={ <UiLoading  theme="white-red"/>}>
                                <PersonFilms personFilms={ personFilms } />
                            </Suspense>
                        :
                            null }
                </div>
            </div>
        </>
    )
};

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func
}


export default withErrorApi( PersonPage );




