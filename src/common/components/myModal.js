import React from 'react'
import { Modal, Button } from 'antd';

class MyModal extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type={this.props.type || 'primary'} onClick={this.showModal}>
          {this.props.titulo || 'Modal'}
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default MyModal