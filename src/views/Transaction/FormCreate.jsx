import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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

class FormCreate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			borrower_name: '',
			phone: '',
			date_of_borrowing: '',
			note_of_borrowing: '',

			toggle: false,
			redirect: false,
			response: ''
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
		const self = this;
	    event.preventDefault();
	    
	    const postData = {
	    	borrower_name: this.state.borrower_name,
	    	phone: this.state.phone,
	    	date_of_borrowing: this.state.date_of_borrowing,
	    	note_of_borrowing: this.state.note_of_borrowing
	    };

	    $.post(
	    	'http://localhost/asset-server/api/transaction/trx', postData
	    )
		.done(function(res) {
			self.setState({
				redirect: true,
				response: res
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
								<h4 className="modal-title modalTitle">Create New</h4>
							</div>

							<form onSubmit={this.handleSubmit} className="form-horizontal">
								<div className="modal-body">

								    <div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Borrower Name</label>
									        <input 
									        	onChange={this.handleChange}
									        	autoFocus required 
									        	type="text" 
									        	name="borrower_name" 
									        	id="borrower_name" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here"/>
									    </div>
									</div>
									<div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Phone</label>
									        <input 
									        	onChange={this.handleChange}
									        	autoFocus required 
									        	type="text" 
									        	name="phone" 
									        	id="phone" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here"/>
									    </div>
									</div>
									<div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Date of Borrowing</label>
									        <input 
									        	onChange={this.handleChange}
									        	required 
									        	type="text" 
									        	name="date_of_borrowing" 
									        	id="date_of_borrowing" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here"/>
									    </div>
									</div>
									<div className="form-group">
    									<div className="col-md-12"> 
									        <label className="control-label">Note</label>
									        <textarea 
									        	onChange={this.handleChange}
									        	name="note_of_borrowing"
									        	id="note_of_borrowing" 
									        	className="form-control" 
									        	autoComplete="off" 
									        	placeholder="Input here">
									        </textarea>
									    </div>
									</div>

								</div>

								<div className="modal-footer">
							        <button type="submit" className="btn btn-success waves-effect buttonAct">
							            <i className="fa fa-check"></i><span className="buttonText"> Submit</span>
							        </button>
							        <a className="btn btn-danger" onClick={this.toggle}><i className="fa fa-times"></i> Close</a>
							    </div>
							</form>

						</div>
					</div>
				</div>
			</div>
		);

		if (this.state.redirect) 
			return (
				<Redirect to={ 'transaction/create/'+this.state.response } replace/>
			)

		return (
			<div>
				<ToastContainer />
				<a className="btn btn-success" onClick={this.toggle}><i className="fa fa-edit"></i> Form Create</a>
				{modal}
			</div>
		);
	}
}

export default FormCreate;