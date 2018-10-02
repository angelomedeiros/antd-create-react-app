import React from 'react'
import { Table, Divider, Tag } from 'antd';
import axios from 'axios'

const columns = [{
  title: 'Issue Number',
  dataIndex: 'number',
  width: '10%'
}, {
  title: 'Title',
  dataIndex: 'title',
  width: '30%'
}, {
  title: 'Created At',
  dataIndex: 'created_at',
  width: '15%',
  render: created_at => `${new Date(created_at).toDateString()}`
}, {
  title: 'Updated At',
  dataIndex: 'updated_at',
  width: '15%',
  render: updated_at => `${new Date(updated_at).toDateString()}`
}, {
  title: 'Labels',
  dataIndex: 'labels',
  width: '20%',
  render: labels => Array.isArray(labels) ?
    labels.map((label) => (
      <span key={label.id}>
        {label && label.name || 'No label'}
      </span>
    )) :
    <span>No label</span>
}, {
  title: 'State',
  dataIndex: 'state',
  width: '10%'
}];


export default class TableMy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataRepo: [{}]
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/repos/facebook/react/issues').then(
      response => this.setState({ dataRepo: response.data })
    )
  }

  render() {
    return (
      <Table columns={columns} dataSource={this.state.dataRepo} rowKey={data => data.id} />
    )
  }
}