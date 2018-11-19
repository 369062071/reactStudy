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

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

function Boss () {
	return (
		<h2>Boss 页面</h2>
	)
}

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Boss path='boss' component={Boss}></Boss>
				<Route path='/login' component={Login}></Route>
				<Route path='/register' component={Register}></Route>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
