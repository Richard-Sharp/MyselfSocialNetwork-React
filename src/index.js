import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/ReduxStore'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";


ReactDOM.render(
		<Provider store={store}>
				<App/>
		</Provider>,
		document.getElementById('root'));

serviceWorker.unregister();
