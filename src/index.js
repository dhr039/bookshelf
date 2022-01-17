import {loadDevTools} from './dev-tools/load'
import './bootstrap'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {App} from './app'

ReactDOM.render(<App />, document.getElementById('root'))

// loadDevTools(() => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// })
