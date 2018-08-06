import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import _ from 'lodash';
import $ from 'jquery';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import TransactionDetail from './TransactionDetail';

// Import modal
import FormCreate from './FormCreate';

class Transaction extends Component {
	
	constructor() {
		super();
		this.state = {
			data: [],
			pages: null,
			loading: true
		};
		this.fetchAPI = this.fetchAPI.bind(this);
		this.fetchData = this.fetchData.bind(this);
		this.requestData = this.requestData.bind(this);
	}

	fetchAPI() {
		
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

		return isValue;
	}

	requestData(pageSize, page, sorted, filtered) {
		return new Promise((resolve, reject) => {

			// You can retrieve your data however you want, in this case, we will just use some local data.
			let filteredData = this.fetchAPI();

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

	fetchData(state, instance) {

		// Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
		// You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
		this.setState({ loading: true });

		// Request the data however you want.  Here, we'll use our mocked service we created earlier
		this.requestData(
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
				<Route path='/transaction/create/:id' component={ TransactionDetail } />
			)

		// Read
		const { data, pages, loading } = this.state;
		return (
			<div className="col-md-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
	                    <h3 className="panel-title"><span className="fa fa-angle-double-right"></span> List Transactions</h3>
	                    <div className="btn-group pull-right">
	                    	<FormCreate />
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
						       Header: '',
						       maxWidth: 150,
						       Cell: row => (
						           <div style={{ textAlign:'center' }}>
						               <button className="btn btn-sm btn-info" onClick={() => alert(row.original)}>Edit</button>
						               <button className="btn btn-sm btn-danger" onClick={() => alert(row.original)}>Delete</button>
						           </div>
						       )
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