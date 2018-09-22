import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App.js'
import { Whoops404 } from './components/Whoops404.js'
import { Router, Route, hashHistory } from 'react-router'

window.React = React /** Errors will show if 'React" isn't defined in window */

render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="list-concerts" component={App}>
            <Route path=":filter" component={App} />
        </Route>
        <Route path="add-concert" component={App} />
        <Route path="*" component={Whoops404} />
    </Router>,
		document.getElementById('react-container')
)
