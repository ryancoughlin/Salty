import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app/components/app';

export default class SaltyReact extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('SaltyReact', () => SaltyReact);
