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
          {this.props.label || 'Label'}
        </Button>
        <Modal
          destroyOnClose={true}
          title={this.props.titulo}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default MyModal