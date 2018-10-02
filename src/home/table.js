import React from 'react'
import { Table } from 'antd';

const columns = [{
  title: 'Issue Number',
  dataIndex: 'number',
  width: '10%',
}, {
  title: 'Title',
  dataIndex: 'title',
  width: '30%'
}, {
  title: 'Created At',
  dataIndex: 'created_at',
  width: '15%',
  render: created_at => created_at ? `${new Date(created_at).toDateString()}` : ''
}, {
  title: 'Updated At',
  dataIndex: 'updated_at',
  width: '15%',
  render: updated_at => updated_at ? `${new Date(updated_at).toDateString()}` : ''
}, {
  title: 'Labels',
  dataIndex: 'labels',
  width: '20%',
  render: labels => Array.isArray(labels) ?
    labels.map((label) => (
      <span key={label.id}>
        {(label && label.name) || ''}
      </span>
    )) : ''
}, {
  title: 'State',
  dataIndex: 'state',
  width: '10%'
}];


export default props => (
  <Table columns={columns} loading={props.loading} dataSource={props.dataSource} rowKey={data => data.id} />
)