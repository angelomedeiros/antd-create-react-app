import React from 'react'
import { Row, Col, Icon, Input, Button, Menu, Dropdown, Radio } from 'antd'
import TableMy from './table'
import axios from 'axios'
import _ from 'lodash'

const Search = Input.Search
const RadioGroup = Radio.Group

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataRepo: [{}],
      searchText: '',
      value: '',
      loading: true,
      sort: 'created',
      state: 'all'
    }
  }

  componentDidMount() {
    this.fetchData(this.state)
  }

  fetchData({ state = 'all', sort = 'created' }) {
    this.setState({ loading: true })
    axios.get(`https://api.github.com/repos/facebook/react/issues?state=${state}&sort=${sort}`)
      .then(
        response => this.setState({ dataRepo: response.data })
      ).then(res => this.setState({ loading: false }))
  }

  menu() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    }

    return (
      <Menu>
        <RadioGroup style={{ margin: 15 }} onChange={(e) => {
          this.fetchData(e.target.value)
        }}>
          <Radio style={radioStyle} value={{ state: 'open' }}>State: Open</Radio>
          <Radio style={radioStyle} value={{ state: 'closed' }}>State: Close</Radio>
          <Radio style={radioStyle} value={{ sort: 'created' }}>Created</Radio>
          <Radio style={radioStyle} value={{ sort: 'updated' }}>Updated</Radio>
        </RadioGroup>
      </Menu>
    )
  }

  render() {
    return (
      <div>
        <Row type='flex' justify='space-between' style={{ margin: '15px 20px' }} >
          <Col>
            <Search
              placeholder="Enter the issue title"
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
              onPressEnter={() => {
                this.setState({
                  searchText: _.filter(this.state.dataRepo, { 'title': this.state.value })
                })
              }}
              style={{ width: 300, marginRight: '15px', marginBottom: '10px' }}
            />
            <Button onClick={() => {
              this.setState({ searchText: '', value: '' })
            }}>
              Clear
            </Button>
          </Col>
          <Col>
            <span
              style={{ color: '#a1a7b3', marginRight: 10, cursor: 'pointer' }}
              onClick={() => this.fetchData({ sort: 'created', state: 'all' })}>
              Reset
            </span>
            <Dropdown overlay={this.menu()}>
              <Button type="default">
                <Icon type="filter" theme="outlined" />
                Filter by
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <Row style={{ margin: '15px 20px' }}>
          <Col>
            <TableMy dataSource={this.state.searchText || this.state.dataRepo} loading={this.state.loading} />
          </Col>
        </Row>
      </div>
    )
  }
}