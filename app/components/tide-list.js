import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Modal,
} from 'react-native';

import TideCell from './tide-list/tide-cell'
import TideSectionHeader from './tide-list/tide-section-header'

export default class extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(props.tides),
    }
  }

  renderRow(row) {
    return (
      <TideCell
        tide={row}
      />
    )
  }

  renderSectionHeader(_section, dateString) {
    return (
      <TideSectionHeader
        date={dateString}
      />
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSectionHeader={this.renderSectionHeader.bind(this)}
      />
    )
  }
}
