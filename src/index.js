import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	
	<HashRouter>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>

), document.getElementById('root'));

registerServiceWorker();