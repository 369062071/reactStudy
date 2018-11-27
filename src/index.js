import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reducers from './reducer'
import './index.css'

import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './conponent/authRoute/authRoute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path='/bossinfo' component={BossInfo}></Route>
				<Route path='/geniusinfo' component={GeniusInfo}></Route>
				<Route path='/login' component={Login}></Route>
				
				<Route path='/register' component={Register}></Route>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
