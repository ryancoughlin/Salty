import React, { Component } from 'react'
import {
  ListView,
} from 'react-native'
import TideCell from './tide-cell'
import TideSectionHeader from './tide-section-header'
import BaseStyle from '../../base-styles'

export default class extends Component {
  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(props.tides),
    }
  }

  renderRow(row) {
    return (<TideCell tide={row} />)
  }

  renderSectionHeader(_section, dateString) {
    return (<TideSectionHeader date={dateString} />)
  }

  render() {
    return (
      <ListView
        style={{ marginTop: BaseStyle.navigationBarHeight }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSectionHeader={this.renderSectionHeader.bind(this)}
      />
    )
  }
}
