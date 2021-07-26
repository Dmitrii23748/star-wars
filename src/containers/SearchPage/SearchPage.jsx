import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { getApiResource } from '../../utils/network';
import { API_SEARCH } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PropTypes from 'prop-types';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import styles from './SearchPage.module.css';
import SearchPageInfo from '../../components/SearchPage/SeargPageInfo/SearchPageInfo';
import UiInput from '../../UI/UiInput/UiInput';



const SearchPage = ({ setErrorApi }) => {
    
    const [inputSearchValue, setInputSearchValue] = useState( '' );
    const [people, setPeople] = useState( [] );
    
    const getResponce = async param => {
        const res = await getApiResource( API_SEARCH + param );
        if ( res ) {
            const peopleList = res.results.map( ( { name, url } ) => {
                const id = getPeopleId( url );
                const img = getPeopleImg( id );
                return {
                    id,
                    name,
                    img
                }
            } )
            setPeople(peopleList);
            setErrorApi( false );
        } else {
            setErrorApi( true );
        };
    }

    useEffect( () => {
        getResponce( '' );
    }, [] );

    const debouncedGetResponce = useCallback(
        debounce( value => getResponce( value ), 300 ),
        []
    );
        

    const handleInputChange = ( value ) => {
        setInputSearchValue( value );
        debouncedGetResponce( value );
    }

    return (
        <>
            <h1 className="header__text">Search</h1>
            <UiInput
                value={inputSearchValue}
                handleInputChange={ handleInputChange }
                placeholder="Input charecter's name"
                classes={styles.input__search}
            />
            <div>
                <SearchPageInfo people={ people }/>
            </div>
        </>
    );
};

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}




export default withErrorApi(SearchPage);