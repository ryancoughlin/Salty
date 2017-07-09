import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/station'
import TideCell from './tide-cell'
import TideSectionHeader from './tide-section-header'
import CloseModalButton from '../buttons/close-modal-button'

const TideTable = class extends Component {
  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(this.props.current.tides),
    }
  }

  renderRow(row) {
    return <TideCell tide={row} />
  }

  renderSectionHeader(_section, dateString) {
    return <TideSectionHeader date={dateString} />
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

const mapStateToProps = ({ stations }) => ({
  current: stations.current,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TideTable)
