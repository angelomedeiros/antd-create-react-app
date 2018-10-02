import React from 'react'
import { Row, Col, Icon, Input, Button } from 'antd'
import TableMy from './table'

const Search = Input.Search

export default props => (
  <div>
    <Row type='flex' justify='space-between' style={{ margin: '15px 20px' }} >
      <Col>
        <Search
          placeholder="Digite o título da issue"
          onSearch={value => console.log(value)}
          style={{ width: 300, marginRight: '15px', marginBottom: '10px' }}
        />
      </Col>
      <Col>        
        <Button type="default">
          <Icon type="filter" theme="outlined" />
          Filtrar
        </Button>
      </Col>
    </Row>
    <Row style={{ margin: '15px 20px' }}>
      <Col>
        <TableMy />
      </Col>
    </Row>
  </div>
)