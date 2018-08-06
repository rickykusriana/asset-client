import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import appRoutes from '../routes/index';

class Sidebar extends Component {
    render() {
        return (
            <ul className="x-navigation x-navigation-horizontal">
                <li className="xn-logo">
                    <a role="button" href="/">?</a>
                    <a role="button" className="x-navigation-control"> </a>
                </li>

                {
                    appRoutes.map((prop,key) => {
                        if ( ! prop.redirect && ! prop.hidden)
                        return (
                            <li key={key}>
                                <NavLink to={prop.path} activeClassName="active" replace>
                                    <span className={prop.icon}></span>{prop.name}
                                </NavLink>
                            </li>
                        );
                        return false;
                    })
                }

                <li className="xn-icon-button pull-right">
                    <a role="button" className="mb-control" data-box="#mb-signout"><span className="fa fa-sign-out"></span></a>                        
                </li>
            </ul>
        );
    }
}

export default Sidebar;