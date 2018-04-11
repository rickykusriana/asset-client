import React, { Component } from 'react';
import $ from 'jquery';

import { get_img, cut_htmltag } from '../../helpers/index';

class Pagination extends Component {
	constructor() {
		super();
		this.state = {
			
			// Initialize from API
            isValue: [],
            isLoading: false,
            isError: null,

			// Initialize Pagination
			currentPage: 1,
			todosPerPage: 3,
			upperPageBound: 3,
			lowerPageBound: 0,
			isPrevBtnActive: "disabled",
			isNextBtnActive: "",
			pageBound: 3
		};

		this.handleClick = this.handleClick.bind(this);
		this.btnDecrementClick = this.btnDecrementClick.bind(this);
		this.btnIncrementClick = this.btnIncrementClick.bind(this);
		this.btnNextClick = this.btnNextClick.bind(this);
		this.btnPrevClick = this.btnPrevClick.bind(this);
		this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
	}

	// For generate API
	componentDidMount(){
        this.setState({
            isLoading: true
        })

        var getApi;

        if (window.location.origin === 'http://localhost:3000') {
        	getApi = 'http://localhost/masterapp/api/post/blog?X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';
        }
        else {
        	getApi = 'https://kodokode.com/api/post/blog?X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';
        }

        fetch(getApi)

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

	componentDidUpdate() {
		$("ul li.active").removeClass("active");
		$("ul li#" + this.state.currentPage).addClass("active");
	}

	handleClick(event) {
		let listid = Number(event.target.id);
		this.setState({
			currentPage: listid
		});

		$("ul li.active").removeClass("active");
		$("ul li#" + listid).addClass("active");
		this.setPrevAndNextBtnClass(listid);
	}

	setPrevAndNextBtnClass(listid) {
		let totalPage = Math.ceil(
			this.state.isValue.length / this.state.todosPerPage
		);
		
		this.setState({ isNextBtnActive: "disabled" });
		this.setState({ isPrevBtnActive: "disabled" });

		if (totalPage === listid && totalPage > 1) {
			this.setState({ isPrevBtnActive: "" });
		} 
		else if (listid === 1 && totalPage > 1) {
			this.setState({ isNextBtnActive: "" });
		}
		else if (totalPage > 1) {
			this.setState({ isNextBtnActive: "" });
			this.setState({ isPrevBtnActive: "" });
		}
	}

	btnIncrementClick() {
		this.setState({
			upperPageBound: this.state.upperPageBound + this.state.pageBound
		});
		this.setState({
			lowerPageBound: this.state.lowerPageBound + this.state.pageBound
		});
		let listid = this.state.upperPageBound + 1;
		this.setState({ currentPage: listid });
		this.setPrevAndNextBtnClass(listid);
	}

	btnDecrementClick() {
		this.setState({
			upperPageBound: this.state.upperPageBound - this.state.pageBound
		});
		this.setState({
			lowerPageBound: this.state.lowerPageBound - this.state.pageBound
		});
		let listid = this.state.upperPageBound - this.state.pageBound;
		this.setState({ currentPage: listid });
		this.setPrevAndNextBtnClass(listid);
	}

	btnPrevClick() {
		if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
			this.setState({
				upperPageBound: this.state.upperPageBound - this.state.pageBound
			});
			this.setState({
				lowerPageBound: this.state.lowerPageBound - this.state.pageBound
			});
		}
		let listid = this.state.currentPage - 1;
		this.setState({ currentPage: listid });
		this.setPrevAndNextBtnClass(listid);
	}

	btnNextClick() {
		if (this.state.currentPage + 1 > this.state.upperPageBound) {
			this.setState({
				upperPageBound: this.state.upperPageBound + this.state.pageBound
			});
			this.setState({
				lowerPageBound: this.state.lowerPageBound + this.state.pageBound
			});
		}
		let listid = this.state.currentPage + 1;
		this.setState({ currentPage: listid });
		this.setPrevAndNextBtnClass(listid);
	}

	render() {
		const { isValue, isLoading, isError, 
				currentPage, todosPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
		
		// Condition if get API
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

		// Logic for displaying current isValue
		const indexOfLastTodo = currentPage * todosPerPage;
		const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
		const currentTodos = isValue.slice(indexOfFirstTodo, indexOfLastTodo);

		const renderTodos = currentTodos.map((prop, key) => {
			
			return (
                <div className="col-md-4" key={key}>

                    <div className="post-item">
                        <div className="post-title">
                            <a href="pages-blog-post.html">{prop.post_title}</a>
                        </div>
                        <div className="post-date">
                            <span className="fa fa-calendar"></span> {prop.created_at}&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-user"></span><a href="pages-profile.html">{prop.created_by}</a>
                        </div>
                        <div className="post-text">
                            <img src={ get_img(prop.post_content) } className="img-responsive img-text" alt="image1" style={{ width:463.7+'px', height:283.21+'px' }} />
                            <p>{ cut_htmltag(prop.post_content) }</p>
                            <button className="btn btn-default btn-rounded pull-right">Read more</button>
                        </div>
                        <div className="post-row">
                            <hr/>
                        </div>
                    </div>
                </div>
            )

		});

		// Logic for displaying page numbers
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(isValue.length / todosPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			if (number === 1 && currentPage === 1) {
				return (
					<li key={number} className="active" id={number}>
						<a id={number} onClick={this.handleClick} style={{cursor: "pointer"}}>
						{number}
						</a>
					</li>
				);
			} 
			else if (number < upperPageBound + 1 && number > lowerPageBound) {
				return (
					<li key={number} id={number}>
						<a id={number} onClick={this.handleClick} style={{cursor: "pointer"}}>
						{number}
						</a>
					</li>
				);
			}
			else {
				return false;
			}
		});

		let pageIncrementBtn = null;
		if (pageNumbers.length > upperPageBound) {
			pageIncrementBtn = (
				<li className="">
					<a onClick={this.btnIncrementClick} style={{cursor: "pointer"}}>
					{" "}
					&hellip;{" "}
					</a>
				</li>
			);
		}

		let pageDecrementBtn = null;
		if (lowerPageBound >= 1) {
			pageDecrementBtn = (
				<li className="">
					<a onClick={this.btnDecrementClick} style={{cursor: "pointer"}}>
					{" "}
					&hellip;{" "}
					</a>
				</li>
			);
		}

		let renderPrevBtn = null;
		if (isPrevBtnActive === "disabled") {
			renderPrevBtn = (
				<li className={isPrevBtnActive}>
				<span id="btnPrev"> Prev </span>
				</li>
			);
		}
		else {
			renderPrevBtn = (
				<li className={isPrevBtnActive}>
					<a id="btnPrev" onClick={this.btnPrevClick} style={{cursor: "pointer"}}>
					{" "}
					Prev{" "}
					</a>
				</li>
			);
		}

		let renderNextBtn = null;
		if (isNextBtnActive === "disabled") {
			renderNextBtn = (
				<li className={isNextBtnActive}>
					<span id="btnNext"> Next </span>
				</li>
			);
		}
		else {
			renderNextBtn = (
				<li className={isNextBtnActive}>
					<a id="btnNext" onClick={this.btnNextClick} style={{cursor: "pointer"}}>
					{" "}
					Next{" "}
					</a>
				</li>
			);
		}
		
		return (
			<div>
				<div className="panel panel-success">
                    <div className="panel-body posts">
                        <div className="row">
							{renderTodos}
						</div>
                    </div>
                </div>
				<ul className="pagination pagination-sm pull-right push-down-20">
					{renderPrevBtn}
					{pageDecrementBtn}
					{renderPageNumbers}
					{pageIncrementBtn}
					{renderNextBtn}
				</ul>
			</div>
		);
	}
}

export default Pagination;