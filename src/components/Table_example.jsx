import React from 'react'
import { Table, Switch, Form, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import {withTranslation} from 'react-i18next'
import PropTypes from 'prop-types'

const data = []
for (let i = 1; i <= 7; i++) {
  data.push({
    key: i,
    dateTime: 'John Brown',
    id: `${i}2`,
    cardNumber: `8600 **** 532${i}`,
    type: 'оплата',
    summary: i*100,
    incomeNumber: `8600 **** 782${i}`,
    merchantName: 'John Brown',
    enrolled: `${i}0000`,
    tax: i*1000,
    tNumber: `43${i}213`,
    check: `56${i}20${i}`,
    phone: `+99890${i}${i--}9 3${i} ${i++}2`,
    description: `My name is John #ece8e8, I am ${i}2 years old, living in New York No. ${i} Lake Park.`
  })
}

const pagination = { position: 'bottom' }
const { Text } = Typography

class Transaction extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'middle',
    scroll: undefined,
    hasData: true,
    top: 'none',
    bottom: 'bottomRight'
  };

  handleToggle = prop => enable => {
    this.setState({ [prop]: enable })
  };

  handleDataChange = hasData => {
    this.setState({ hasData })
  };

  render() {
    const { t } = this.props
    const columns = [
      {
        title: t('transaction date-time'),
        dataIndex: 'dateTime',
        width: 100,
        sorter: (a, b) => {
          let x = a.dateTime
          let y = b.dateTime
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction ID'),
        dataIndex: 'id',
        width: 100,
        sorter: (a, b) => {
          let x = a.id
          let y = b.id
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction card number'),
        dataIndex: 'cardNumber',
        width: 100,
        sorter: (a, b) => {
          let x = a.cardNumber
          let y = b.cardNumber
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction type'),
        dataIndex: 'type',
        width: 100,
        sorter: (a, b) => {
          let x = a.type
          let y = b.type
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction summary'),
        dataIndex: 'summary',
        width: 100,
        sorter: (a, b) => {
          let x = a.summary
          let y = b.summary
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction card income'),
        dataIndex: 'incomeNumber',
        width: 100,
        sorter: (a, b) => {
          let x = a.incomeNumber
          let y = b.incomeNumber
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction merchant name'),
        dataIndex: 'merchantName',
        width: 100,
        sorter: (a, b) => {
          let x = a.merchantName
          let y = b.merchantName
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction enrolled'),
        dataIndex: 'enrolled',
        width: 100,
        sorter: (a, b) => {
          let x = a.enrolled
          let y = b.enrolled
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
      },
      {
        title: t('transaction tax'),
        dataIndex: 'tax',
        width: 100,
        sorter: (a, b) => a.tax - b.tax
      },
      {
        title: t('transaction number'),
        dataIndex: 'tNumber',
        width: 100,
        sorter: (a, b) => a.tNumber - b.tNumber
      },
      {
        title: t('transaction check number'),
        dataIndex: 'check',
        width: 100,
        sorter: (a, b) => a.check - b.check
      },
      {
        title: t('transaction phone number'),
        dataIndex: 'phone',
        width: 100,
        sorter: (a, b) => a.phone - b.phone
      },
      {
        title: 'Address',
        dataIndex: 'address',
        width: 100,
        sorter: (a, b) => {
          let x = a.address
          let y = b.address
          if (typeof x === 'string') {
            x = x.charCodeAt()
          }
          if (typeof y === 'string') {
            y = y.charCodeAt()
          }
          return x - y
        }
        // filters: [
        //   {
        //     text: 'London',
        //     value: 'London'
        //   },
        //   {
        //     text: 'New York',
        //     value: 'New York'
        //   }
        // ],
        // onFilter: (value, record) => record.address.indexOf(value) === 0
      },
      {
        title: 'Action',
        key: 'action',
        width: 100,
        sorter: false,
        render: () => (
          <a className="ant-dropdown-link">
            More actions <DownOutlined />
          </a>
        )
      }
    ]

    const {...state } = this.state

    const scroll = {}
    scroll.y = 540

    const tableColumns = columns.map(item => ({ ...item, ellipsis: true }))
    tableColumns[tableColumns.length - 1].fixed = 'right'

    console.log(data)
    return (
      <>
        <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{ marginBottom: 16 }}
        >
          <Form.Item label="loading">
            <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
          </Form.Item>
          <Form.Item label="Has Data">
            <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
          </Form.Item>
        </Form>
        <Table
          {...this.state}
          pagination={{ position: ['none', 'bottomRight'] }}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
          showSorterTooltip={false}
          summary={pageData => {
            let totalSummary = 0
            let totalTax = 0

            pageData.forEach(({ summary, tax }) => {
              totalSummary += summary
              totalTax += tax
            })

            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell>{t('transaction summary')}</Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Text type="danger">{totalSummary}</Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Text>{totalTax}</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell>{t('transaction tax')}</Table.Summary.Cell>
                  <Table.Summary.Cell colSpan={2}>
                    <Text type="success">{totalTax - totalSummary}</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            )
          }}
        />
      </>
    )
  }
}

Transaction.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Transaction)
