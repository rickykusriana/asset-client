import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import $ from 'jquery';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

// Import modal
import Modal from './Modal';

// Get data from server 
let isValue = '';
$.ajax({
	url: 'http://localhost/asset-server/api/transaction/trx',
	async: false,
	dataType: 'json',
	success: function (json) {
		isValue = json;
	}
});

//

const requestData = (pageSize, page, sorted, filtered) => {
	return new Promise((resolve, reject) => {

		// You can retrieve your data however you want, in this case, we will just use some local data.
		let filteredData = isValue;

		// You can use the filters in your request, but you are responsible for applying them.
		if (filtered.length) {
			filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
				return filteredSoFar.filter(row => {
					return (row[nextFilter.id] + "").includes(nextFilter.value);
				});
			}, filteredData);
		}
		
		// You can also use the sorting in your request, but again, you are responsible for applying it.
		const sortedData = _.orderBy(
			filteredData,
			sorted.map(sort => {
				return row => {
					if (row[sort.id] === null || row[sort.id] === undefined) {
						return -Infinity;
					}
					return typeof row[sort.id] === "string" ? row[sort.id].toLowerCase() : row[sort.id];
				};
			}),
			sorted.map(d => (d.desc ? "desc" : "asc"))
		);

		// You must return an object containing the rows of the current page, and optionally the total pages number.
		const res = {
			rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
			pages: Math.ceil(filteredData.length / pageSize)
		};

		// Here we'll simulate a server response with 500ms of delay.
		setTimeout(() => resolve(res), 500);
	});
};

class Transaction extends Component {
	
	constructor() {
		super();
		this.state = {
			data: [],
			pages: null,
			loading: true
		};
		this.fetchData = this.fetchData.bind(this);
	}

	fetchData(state, instance) {
		// Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
		// You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
		this.setState({ loading: true });

		// Request the data however you want.  Here, we'll use our mocked service we created earlier
		requestData(
			state.pageSize,
			state.page,
			state.sorted,
			state.filtered
		).then(res => {

			// Now just get the rows of data to your React Table (and update anything else like total pages or loading)
			this.setState({
				data: res.rows,
				pages: res.pages,
				loading: false
			});
		});
	}

	render() {

		let match = this.props.match;
		if ( ! match.isExact )

			return (
				<div className="col-md-12">
					<div className="panel panel-primary">

						<div className="panel-heading">
		                    <h3 className="panel-title">
			                    <Link to={`${match.url}`}>
	                                <span className="fa fa-angle-double-left"></span> 
	                            </Link> Form 
	                        </h3>

		                    <div className="btn-group pull-right">
		                    	<Link to={`${match.url}/create`} className="btn btn-warning"><i className="fa fa-undo"></i> Create New</Link>
		                    </div>
		                </div>
		                <div className="panel-body">
		                    <br/>

		                    <div className="row">
		                    	<form action="#" className="form-horizontal">
			                        <div className="col-md-6 col-xs-12">
			                            <div className="form-group">    
				                            <label className="col-md-3 col-xs-12 control-label">Borrower Name</label>
				                            <div className="col-md-8 col-xs-12">
				                                <input type="text" name="borrower_name" id="borrower_name" className="form-control" placeholder="Input here"/>
				                            </div>
				                        </div>

				                        <div className="form-group">
				                            <label className="col-md-3 col-xs-12 control-label">Depatment</label>
				                            <div className="col-md-8 col-xs-12">
				                                <input type="text" name="department" id="department" className="form-control" placeholder="Input here"/>
				                            </div>
				                        </div>

				                        <div className="form-group">
				                            <label className="col-md-3 col-xs-12 control-label">Division</label>
				                            <div className="col-md-8 col-xs-12">
				                                <input type="text" name="division" id="division" className="form-control" placeholder="Input here"/>
				                            </div>
				                        </div>
				                        <div className="form-group">
				                            <label className="col-md-3 col-xs-12 control-label">Phone</label>
				                            <div className="col-md-8 col-xs-12">
				                                <input type="text" name="phone" id="phone" className="form-control" placeholder="Input here"/>
				                            </div>
				                        </div>
				                        <div className="form-group">
				                            <label className="col-md-3 col-xs-12 control-label">Email</label>
				                            <div className="col-md-8 col-xs-12">
				                                <input type="text" name="email" id="email" className="form-control" placeholder="Input here"/>
				                            </div>
				                        </div>
				                    </div>
			                        <div className="col-md-6 col-xs-12">
			                            <div className="form-group">
			                                <label className="col-md-3 col-xs-12 control-label">Date of Borrowing</label>
			                                <div className="col-md-8 col-xs-12">
			                                    <input type="text" name="date_of_borrowing" id="date_of_borrowing" className="form-control datepicker" placeholder="Input here"/>
			                                </div>
			                            </div>
			                            <div className="form-group">
			                                <label className="col-md-3 col-xs-12 control-label">Note of Borrowing</label>
			                                <div className="col-md-8 col-xs-12">
			                                    <textarea name="note_of_borrowing" id="note_of_borrowing" className="form-control" placeholder="Input here"></textarea>
			                                </div>
			                            </div>
			                        </div>
		                        </form>
		                    </div>

		                    <hr/>

		                    <div className="row">
		                        <div className="col-md-12 col-xs-12">

		                        	<div className="btn-group pull-right" style={{marginTop: -10, marginBottom: 10}}>
				                    	<Modal/>
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


		                    <br/>
	                    </div>

		            </div>
		        </div>
			)

		// Read
		const { data, pages, loading } = this.state;
		return (
			<div className="col-md-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
	                    <h3 className="panel-title"><span className="fa fa-angle-double-right"></span> List Transactions</h3>
	                    <div className="btn-group pull-right">
	                    	<Link to={`${match.url}/create`} className="btn btn-success"><i className="fa fa-edit"></i> Form Create</Link>
	                    </div>
	                </div>

					<div className="panel-body">
						
						<ReactTable
						columns={[
							{
								Header: "Borrower Name",
								accessor: "borrower_name"
							},
							{
								Header: "Department",
								id: "department",
								accessor: d => d.department
							},
							{
								Header: "Division",
								id: "division",
								accessor: d => d.division
							},
							{
								Header: "Date of Borrowing",
								accessor: "date_of_borrowing"
							},
							{
								Header: "Status",
								accessor: "is_status"
							},
							{
				                header: '',
				                accessor: 'editButton',
				                render: (value) => (
				                    <button className="btn btn-info" onClick={this.props.onClick.bind(this, value)}>
				                        click me!
				                    </button>
				                ),
				                maxWidth: 60
				            }
						]}
						manual // Forces table not to paginate or sort automatically, so we can handle it server-side
						data={data}
						pages={pages} // Display the total number of pages
						loading={loading} // Display the loading overlay when we need it
						onFetchData={this.fetchData} // Request new data when things change
						filterable
						defaultPageSize={10}
						className="-highlight"
						/>

						<br />

					</div>
				</div>
			</div>
		);
	}
}

export default Transaction;