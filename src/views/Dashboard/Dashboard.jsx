import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

/* import { tocifyInit } from './Variable'; */

class Dashboard extends Component {
    
    /*
    componentDidMount () {
        tocifyInit();
    }
    */

    render() {
        return (
            <div className="col-xs-12">
                <div className="page-title">
                    <h2><span className="fa fa-angle-double-right"></span> Hello</h2>
                </div>

                <div className="col-lg-6 col-md-6 col-xs-12">
                    <OwlCarousel items={1} loop autoplay> 
                        
                        <div className="panel panel-default">
                            <div className="panel-body panel-body-image">
                                <img src="/assets/images/vendor/nature.jpg" alt="image1"/>
                                <a className="panel-body-inform">
                                    <span className="fa fa-check"></span>
                                </a>
                            </div>
                            <div className="panel-body">
                                <h3>Introduce</h3>
                                <p>Hi im Ricky, nice to meet you here. Come here lets make a solution, there is still time for a cup of coffee. 
                                Find the secret ingredients in every iteration, to keep move</p>
                            </div>
                        </div>
                    
                        <div className="panel panel-default">
                            <div className="panel-body panel-body-image">
                                <img src="/assets/images/vendor/withlove.jpg" alt="image2"/>
                                <a className="panel-body-inform">
                                    <span className="fa fa-heart"></span>
                                </a>
                            </div>
                            <div className="panel-body">
                                <h3>Built with Love</h3>
                                <p>On Earth, an ocean is one of the major conventional divisions of the World Ocean, which occupies two-thirds of the planet's surface.</p>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>

                <div className="col-md-3">
                    <a className="tile tile-success">
                        125
                        <p>TASK COMPLETED</p>
                        <div className="informer informer-default"><span className="fa fa-check"></span></div>
                    </a>                        
                </div>
                <div className="col-md-3">
                    <a className="tile tile-danger">
                        4
                        <p>YEARS EXPERIENCE</p>
                        <div className="informer informer-default"><span className="fa fa-calendar"></span></div>
                    </a>                        
                </div>
                <div className="col-md-3">
                    <a className="tile tile-primary">
                        9999+
                        <p>LINES OF CODE</p>
                        <div className="informer informer-default"><span className="fa fa-code"></span></div>
                    </a>                        
                </div>
                <div className="col-md-3">
                    <a className="tile tile-info">
                        257
                        <p>VISITOR</p>
                        <div className="informer informer-default"><span className="fa fa-user"></span></div>
                    </a>                        
                </div>

                <div className="col-md-6">
                    <div className="panel panel-default">
                        <ul className="list-group border-bottom">
                            <li className="list-group-item">
                                UI/UX Design
                                <span className="col-sm-8 pull-right">
                                    <div className="progress" style={{margin: 0}}>
                                        <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 80+"%"}}>80%</div>
                                    </div>
                                </span>
                            </li>
                            <li className="list-group-item">
                                Web Development
                                <span className="col-sm-8 pull-right">
                                    <div className="progress" style={{margin: 0}}>
                                        <div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: 90+"%"}}>90%</div>
                                    </div>
                                </span>
                            </li>
                            <li className="list-group-item">
                                Mobile Application
                                <span className="col-sm-8 pull-right">
                                    <div className="progress" style={{margin: 0}}>
                                        <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: 45+"%"}}>45%</div>
                                    </div>
                                </span>
                            </li>
                            <li className="list-group-item" style={{marginBottom: 12}}>
                                Database
                                <span className="col-sm-8 pull-right">
                                    <div className="progress" style={{margin: 0}}>
                                        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: 85+"%"}}>85%</div>
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;
