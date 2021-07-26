import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setLocalStorage } from '../utils/localStorage'; 
import thunk from 'redux-thunk';
import rootReducers from './reducers';


const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe( () => {
    setLocalStorage( 'store', store.getState().favoriteReducer );
} );

export default store;