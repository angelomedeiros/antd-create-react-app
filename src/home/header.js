import React from 'react'
import { Row, Col, Divider } from 'antd'
import MyModal from '../common/components/myModal'

export default props => (
  <Row type='flex' className='header' align="middle" justify="space-between">
    <Col className='title'>
      <h1>Issues</h1>
    </Col>
    <Col>
      <MyModal titulo='Sign Up'>
        a
      </MyModal>
    </Col>
    <Divider style={{ margin: '12px 0'  }} />
  </Row>  
)