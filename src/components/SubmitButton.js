import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { show } from 'redux-modal'
import { Button as AntdButton } from 'antd'
import AntdModal from './AntdModal'

class SubmitButton extends Component {
  handleOpen = name => () => {
    this.props.show(name, { message: `On est content ?` })
  };

  render() {
    return (
        <div>
          <AntdButton type="primary" onClick={this.handleOpen('antd')}>Submit</AntdButton>
          <AntdModal />
        </div>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ show }, dispatch)
)(SubmitButton)