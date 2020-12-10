import React, { Component } from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import App from '../App'
class Router extends Component {
	render(){
		return(
		<BrowserRouter>
			<Switch>
				<Route exact path = "/" render={props=>(<App {...props}  />)}  ></Route>
				
		    </Switch>
		</BrowserRouter>
		)
	}
}
export default Router;