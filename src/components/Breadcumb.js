import React, {Component} from 'react';
import Breadcumbs  from 'react-router-dynamic-breadcrumbs'; 

const routes = {
  '/dashboard': 'Dashboard',
  '/transaction': 'Transaction',
  '/transaction/create': 'Create',
  '/transaction/:any': 'Detail',
  
  '/users': 'Users',
  '/users/:id/posts/:p_id': 'Post :p_id by :id' }

export default class Breadcumb extends Component {
    render() {
        return (
	        <Breadcumbs mappedRoutes={routes} />
        )
    }
}