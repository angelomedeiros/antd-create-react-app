import React from 'react'
import ReactDOM from 'react-dom'
import './common/css/style.css'
import 'antd/dist/antd.css'

import Home from './home/home'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()
