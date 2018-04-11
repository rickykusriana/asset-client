import React, { Component } from 'react';

class Transaction extends Component {
    
    constructor(){
        super();
        this.state = { 
            isValue: [],
            isLoading: false,
            isError: null
        };
    }

    componentDidMount(){

        this.setState({
            isLoading: true
        })

        fetch('http://localhost/asset-server/api/transaction/trx')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Terjadi kesalahan');
                }
            })

            .then(data => this.setState({
                isValue: data,
                isLoading: false
            }) )
    }

    render() {

        const {isValue, isLoading, isError} = this.state;

        if (isLoading) {
            return <p align="center" style={{marginTop:220}}>
                        <i className="fa fa-spin fa-sync fa-2x"></i>
                        <br/><br/>
                        <span>Get data from API Server ... </span>
                    </p>
        }
        if (isError) {

            return <p align="center" style={{marginTop:220}}>
                        <i className="fa fa-spin fa-sync fa-2x"></i>
                        <br/><br/>
                        <span>{isError.message}</span>
                    </p>
        }

        return (
            <div className="col-md-12">

                <div className="page-title">
                    <h2><span className="fa fa-angle-double-right"></span> Transaction</h2>
                </div>

                <div className="panel panel-default">

                    <div className="col-md-2 pull-right" style={{padding:10}}>
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>

                    <table className="table datatable table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Borrower Name</th>
                                <th>Date of Borrower</th>
                                <th>Date of Return</th>
                                <th width="200"></th>
                            </tr>
                        </thead>
                        <tbody>

                            { 
                                isValue.map((prop, key) => { 
                                    return (
                                        <tr key={key}>
                                            <td>{key+1}</td>
                                            <td>{prop.product_name}</td>
                                            <td>{prop.product_qty}</td>
                                            <td>{prop.borrower_name}</td>
                                            <td>{prop.date_of_borrowing}</td>
                                            <td>{prop.date_of_return}</td>
                                            <td align="center">
                                                <button type="button" className="btn btn-sm btn-info">
                                                    <i className="fa fa-edit"></i> Edit
                                                </button>
                                                <button type="button" className="btn btn-sm btn-danger">
                                                    <i className="fa fa-times"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>

                </div>
                
                { /*
                <ul className="pagination pagination-sm pull-right push-down-20">
                    <li className="disabled"><a>«</a></li>
                    <li className="active"><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>                                    
                    <li><a>»</a></li>
                </ul>
                */ }

            </div>
        );
    }
}

export default Transaction;