import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/ReduxStore'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</Provider>,
		document.getElementById('root'));

serviceWorker.unregister();
