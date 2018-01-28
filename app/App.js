/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import BaseNavigator from './Navigation';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BaseNavigator />
      </Provider>
    );
  }
}