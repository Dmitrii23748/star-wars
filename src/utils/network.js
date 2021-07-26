// функция делает запрос на сервер
export const getApiResource = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('ОШИБКА FETCH.', res.status);
            return false;
        }//обработка ошибки 404

        return await res.json();

    } catch (error) {
        console.error('ОШИБКА FETCH.', error.message);
        return false;
        
    }
}

// (async() => {
//     const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();                              //асинхронная самовызывающаяся функция


// запрос по url res.films для отображения названия фильмов

// 1 вариант:
// export const makeConcurrentRequest = async (url) => {
//     const res = await Promise.all( url.map( res => {
//         return fetch( res ).then( res => res.json() );
//     } ) );

//     return res;
// };

// 2 вариант:
export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all( url.map( async res => {
        const res_1 = await fetch( res );
        return await res_1.json();
    } ) );

    return res;
};


