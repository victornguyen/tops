import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import GlobalStyle from './styles/GlobalStyle'
import App from './App'

ReactDOM.render(
  <Fragment>
    <Normalize />
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
)
