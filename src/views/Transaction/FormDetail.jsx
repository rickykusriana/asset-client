import React, { Component } from 'react';
import $ from 'jquery';

import { ToastContainer, toast } from 'react-toastify';

// Show hide modal
const show = {
	display: 'block'
};
const hide = {
	display: 'none'
};

// The gray background
const backdropStyle = {
	position: 'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.3)',
	padding: 50,
	color: '#362641',
	zIndex: 99
};

class FormDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			product_name: '',
			product_qty: '',
			utilities: '',
			date_of_return: '',
			toggle: false
		}

		this.toggle = this.toggle.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	toggle(event) {
		this.setState(prevState => ({
			toggle: !prevState.toggle
		}));
	}

	// Post
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event => {
	    event.preventDefault();

	    const postData = {
	    	product_name: this.state.product_name,
	    	product_qty: this.state.product_qty,
	    	utilities: this.state.utilities,
	    	date_of_return: this.state.date_of_return
	    };

	    $.post(
	    	'http://localhost/asset-server/api/transaction/trx', postData
	    )
		.done(function() {
		   	toast.success("Success !", {
		        position: toast.POSITION.BOTTOM_LEFT,
		        hideProgressBar: true
		    });
		})
		.fail(function() {
			toast.error("Failed !", {
		        position: toast.POSITION.BOTTOM_LEFT,
		        hideProgressBar: true
		    });
		});
	}

	render() {

		var modal = [];
		modal.push(
			<div className="backdrop" style={this.state.toggle ? backdropStyle : hide } key="modal">
				<div className="modal modal-scroll" id="modal" style={this.state.toggle ? show : hide}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true" style={{color: '#000'}} onClick={this.toggle}>×</button>
								<h4 className="modal-title modalTitle">Add New</h4>
							</div>

							<form onSubmit={this.handleSubmit} className="form-horizontal">
								<div className="modal-body">

								    <div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Product Name</label>
									        <input 
									        	onChange={this.handleChange}
									        	autoFocus required 
									        	type="text" 
									        	name="product_name" 
									        	id="product_name" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here"/>
									    </div>
									</div>
									<div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Qty</label>
									        <input 
									        	onChange={this.handleChange}
									        	required 
									        	type="text" 
									        	name="product_qty" 
									        	id="product_qty" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here"/>
									    </div>
									</div>
									<div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Utilities</label>
									        <input 
									        	onChange={this.handleChange}
									        	type="text" 
									        	name="utilities" 
									        	id="utilities" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here"/>
									    </div>
									</div>
									<div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Date of Return</label>
									        <input 
									        	onChange={this.handleChange}
									        	type="text" 
									        	name="date_of_return" 
									        	id="date_of_return" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here"/>
									    </div>
									</div>

								</div>

								<div className="modal-footer">
							        <button type="submit" className="btn btn-success waves-effect buttonAct">
							            <i className="fa fa-check"></i><span className="buttonText"> Save</span>
							        </button>
							        <a className="btn btn-danger" onClick={this.toggle}><i className="fa fa-times"></i> Close</a>
							    </div>
							</form>

						</div>
					</div>
				</div>
			</div>
		);
		return (
			<div>
				<ToastContainer />
				<a className="btn btn-success" onClick={this.toggle}><i className="fa fa-plus"></i> Add New</a>
				{modal}
			</div>
		);
	}
}

export default FormDetail;