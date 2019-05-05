import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers';

const initialState = {
    registrySuccess: false,
    registryFailure: false,
    registrySent: false
};

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    initialState,
    composeEnhencers(applyMiddleware(thunk))
);