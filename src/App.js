import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import appRoutes from './routes/index';

import Sidebar from './components/Sidebar';
import Breadcumb from './components/Breadcumb';
import Alert from './components/Alert';

class App extends Component {
    render() {
        return (
        	<div className="page-content">

                <Sidebar />
                <Breadcumb />
                <Alert />

            	<div className="page-content-wrap">
                    <div className="row">
                        
                        <Switch>
                        {
                            appRoutes.map((prop,key) => {
                                if (prop.redirect)
                                    return (
                                        <Redirect from={prop.path} to={prop.to} key={key}/>
                                    );
                                return (
                                    <Route path={prop.path} component={prop.content} key={key}/>
                                );
                            })
                        }
                    	</Switch>

                    </div>
                </div>
           	</div>
    	);
    }
}

export default App;