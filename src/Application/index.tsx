import React, { Component, Suspense } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as _ from 'lodash'
import { MenuList } from '../Constant'
import DashBoard from './Dashboard'
export default class Application extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={() => <div>lodaing</div>}>
          <Routes>
            {
              _.map(MenuList, item => {
                return (
                  <Route key={item.path} path={item.path} element={<item.component />} />
                )
              })
            }
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}