import React, { Component } from 'react'
import {
  ListView,
} from 'react-native'

import TideCell from './tide-list/tide-cell'
import TideSectionHeader from './tide-list/tide-section-header'

export default class extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../assets/images/white-x.png'),
      id: 'close',
      disableIconTint: true,
    }],
  }

  constructor(props) {
    super(props)

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(props.tides),
    }
  }

  renderRow(row) {
    return (
      <TideCell tide={row} />
    )
  }

  renderSectionHeader(_section, dateString) {
    return (
      <TideSectionHeader date={dateString} />
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

  onNavigatorEvent(event) {
    if (event.id == 'close') {
      this.props.navigator.dismissModal()
    }
  }
}
