import Dashboard from '../views/Dashboard/Dashboard';
import Transaction from '../views/Transaction/Transaction';

const appRoutes = [
    { 
    	path: "/dashboard", 
    	name: "Dashboard", 
    	icon: "fa fa-tachometer-alt", 
    	content: Dashboard 
    },
    {
        path: "/transaction", 
        name: "Transaction", 
        icon: "fa fa-newspaper",
        content: Transaction 
    },
    { 
    	redirect: true, 
    	path:"/", 
    	to:"/dashboard", 
    	name: "Dashboard" 
    }
];

export default appRoutes;
