/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Age from './components/Age';
import { Provider } from "react-redux";
import store from './store.js';
import { styles } from './styles'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider styles={styles.container} store={store}>
      <Age />
      </Provider>
    );
  }
}