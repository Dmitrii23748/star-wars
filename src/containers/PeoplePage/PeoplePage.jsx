import React from 'react';
import PropTypes from 'prop-types';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';
import styles from './PeoplePage.module.css';

const PeoplePage = ( { setErrorApi }) => {

    const [people, setPeople] = useState( null );
    const [prevPage, setPrevPage] = useState( null );
    const [nextPage, setNextPage] = useState( null );
    const [counterPage, setCounterPage] = useState( 1 );
    
    const query = useQueryParams();
    const queryPage = query.get( 'page' );

    const getResource = async ( url ) => {
        const res = await getApiResource( url );

        if ( res ) {
            const peoplelist = res.results.map( ( { name, url } ) => {
                const id = getPeopleId( url )
                const img = getPeopleImg( id );
                return {
                    id: id,
                    name: name,
                    img: img
                    
                }
            } );
    
            setPeople( peoplelist );
            setPrevPage( res.previous );
            setNextPage( res.next );
            setCounterPage(getPeoplePageId(url))
            setErrorApi( false );
        } else {
            setErrorApi( true );
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getResource={ getResource }
                prevPage={ prevPage }
                nextPage={ nextPage }
                counterPage={ counterPage }
            />
            { people ? ( <PeopleList people={ people } />) : null }
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(PeoplePage);