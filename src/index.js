import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import App from './App'

ReactDOM.render(
  <Fragment>
    <Normalize />
    <App />
  </Fragment>,
  document.getElementById('root')
)
