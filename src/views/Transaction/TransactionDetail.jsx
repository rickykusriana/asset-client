import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormDetail from './FormDetail';

class TransactionDetail extends Component {
	
	constructor() {
		super();
		this.state = {
			id: '',
			borrower_name: '',
			department: '',
			division: '',
			phone: '',
			email: '',
			date_of_borrowing: '',
			note_of_borrowing: '',
			is_status: ''
		}
	}

	componentDidMount() {

		var id = this.props.match.params.id;

		fetch('http://localhost/asset-server/api/transaction/trx?id='+id)

            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Terjadi kesalahan');
                }
            })

            .then(data => this.setState({
                id: data[0].id,
                borrower_name: data[0].borrower_name,
                department: data[0].department,
                division: data[0].division,
                phone: data[0].phone,
                email: data[0].email,
                date_of_borrowing: data[0].date_of_borrowing,
                note_of_borrowing: data[0].note_of_borrowing,
                is_status: data[0].is_status
            }) )
	}

	render() {

		return (
			<div className="col-md-12">
				<div className="panel panel-primary">

					<div className="panel-heading">
	                    <h3 className="panel-title">
		                    <Link to='/transaction'>
                                <span className="fa fa-angle-double-left"></span> 
                            </Link> Form 
                        </h3>

	                    <div className="btn-group pull-right">
	                    	<Link to='/transaction' className="btn btn-warning"><i className="fa fa-undo"></i> Back to List</Link>
	                    </div>
	                </div>
	                <div className="panel-body">
	                    <br/>

	                    <div className="row">

	                    	<div className="col-md-12">

			                    <div className="col-md-6 col-xs-12">
			                    	<table className="table table-hover">
			                    		<tbody>
			                    			<tr>
				                    			<th width="125">Borrower Name</th>
				                    			<th width="2">: </th>
				                    			<td>{this.state.borrower_name}</td>
				                    		</tr>
				                    		<tr>
				                    			<th>Depatment</th>
				                    			<th>: </th>
				                    			<td>{this.state.department}</td>
				                    		</tr>
				                    		<tr>
				                    			<th>Division</th>
				                    			<th>: </th>
				                    			<td>{this.state.division}</td>
				                    		</tr>
				                    		<tr>
				                    			<th>Phone</th>
				                    			<th>: </th>
				                    			<td>{this.state.phone}</td>
				                    		</tr>
				                    		<tr>
				                    			<th>Email</th>
				                    			<th>: </th>
				                    			<td>{this.state.email}</td>
				                    		</tr>
			                    		</tbody>
			                    	</table>
			                    </div>

		                        <div className="col-md-6 col-xs-12">
		                            <table className="table table-hover">
			                    		<tbody>
			                    			<tr>
				                    			<th width="130">Date of Borrowing</th>
				                    			<th width="2">: </th>
				                    			<td>{this.state.date_of_borrowing}</td>
				                    		</tr>
				                    		<tr>
				                    			<th>Status</th>
				                    			<th>: </th>
				                    			<td>{this.state.is_status}</td>
				                    		</tr>
				                    		<tr>
				                    			<th>Note</th>
				                    			<th>: </th>
				                    			<td>{this.state.note_of_borrowing}</td>
				                    		</tr>
			                    		</tbody>
			                    	</table>
		                        </div>


		                        <div className="col-md-12 col-xs-12">
		                        	<hr/>
		                        	<br/>
		                        	<div className="btn-group pull-right" style={{marginTop: -10, marginBottom: 10}}>
				                    	<FormDetail />
				                    </div>

		                        	<table className="table table-bordered">
		                        		<thead>
		                        			<tr>
			                        			<th width="10">No</th>
			                        			<th>Product Name</th>
			                        			<th>Qty</th>
			                        			<th>Utilities</th>
			                        			<th>Date of Return</th>
			                        			<th>Note</th>
			                        		</tr>
		                        		</thead>
		                        		<tbody>
		                        			<tr>
			                        			<td>1</td>
			                        			<td>Product Name</td>
			                        			<td>Qty</td>
			                        			<td>Utilities</td>
			                        			<td>Date of Return</td>
			                        			<td>Note</td>
			                        		</tr>
		                        		</tbody>
		                        	</table>

		                       	</div>
	                       	
	                       	</div>
	                    </div>

                    </div>
	            </div>
	        </div>
		)
	}
}

export default TransactionDetail;