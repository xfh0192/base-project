import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import { MenuList } from '../../Constant'
import _ from 'lodash'

export default class DashBoard extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      _.map(MenuList, item => {
        return (
          <div key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </div>
        )
      })
    )
  }
}