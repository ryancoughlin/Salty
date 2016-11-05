import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import _ from 'lodash';
import moment from 'moment';
import Geocoder from 'react-native-geocoder';

export default class extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,

    });

    const data = {
      "Awesome": ["deep dish pizza", "pre tim cook apple"],
      "Not awesome": ["NYC pizza", "time cook apple", "touchbar"]
    }
    console.log(props.tides);
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(props.tides),
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.tide}</Text>}
        renderSectionHeader={(_, x) => {
          console.log('wow', x);
          return <Text>{x}</Text>;
        } }
        />
    )
  }
}
