import {
    SWAPI_PEOPLE,
    HTTPS, SWAPI_ROOT,
    GUIDE_IMG_EXTENSION,
    URL_IMG_PERSON,
    SWAPI_PARAMS_PAGE
} from '../constants/api'




export const getPeoplePageId = url => {
    const position = url.lastIndexOf( SWAPI_PARAMS_PAGE );
    const id = url.slice( position + SWAPI_PARAMS_PAGE.length, url.length );
    return Number( id );
}

// общая фунуция
const getId = ( url, category ) => {
    const id = url
        .replace( HTTPS + SWAPI_ROOT + category, '' )
        .replace(/\//g, '')
    return id;
    
};

// ф-ия для запроса персонажей
export const getPeopleId = url => getId( url, SWAPI_PEOPLE );

// ф-ия для запроса фото персонажей
export const getPeopleImg = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;