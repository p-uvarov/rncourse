// import { createStore, combineReducers } from 'redux';
// import placesReducer from './reducers/places';

// const rootReducer = combineReducers({
//     places: placesReducer
// });

// const configureStore = () => {
//     return createStore(rootReducer);
// };

// export default configureStore;

// import { configureStore } from "redux-starter-kit";
// import devToolsEnhancer from "remote-redux-devtools";
// import { combineReducers } from 'redux';

// import placesReducer from './reducers/places';

// const rootReducer = combineReducers({
//     places: placesReducer
// });

// const store = configureStore({
//     rootReducer,
//     devTools: false,
//     enhancers: [devToolsEnhancer({ realtime: true })]
// });

// const configureStoreFunc = () => {
//     return store;
// };

// export default configureStoreFunc;

// ----- Settings for remote dev tools -----

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';

// import placesReducer from './reducers/places';

// const rootReducer = combineReducers({
//     places: placesReducer
// });

// export default function configureStore(initialState) {
//     const store = createStore(
//         rootReducer,
//         composeWithDevTools(
//             applyMiddleware(),
//         )
//     );

//     return store;
// };


//----- Settings for React Native Debugger -----

import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

let composeEnhancer = compose;

if(__DEV__) {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
};

export default configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancer()
    );

    return store;
};