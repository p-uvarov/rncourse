/**
 * @format
 */
// import { Navigation } from "react-native-navigation";
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';

const store = configureStore();

const app = props => (
    <Provider {...props} store={store}>
        <App {...props} />
    </Provider>
);

AppRegistry.registerComponent(appName, () => app);

// Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => app);

// Navigation.events().registerAppLaunchedListener(() => {
//     Navigation.setRoot({
//         root: {
//             component: {
//                 name: "navigation.playground.WelcomeScreen"
//             }
//         }
//     });
// });