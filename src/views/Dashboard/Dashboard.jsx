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

                <div className="col-md-12">

                    <div className="content-frame">
                        <div className="content-frame-top">
                            <div className="page-title">
                                <h2><span className="fa fa-clock-o"></span> Resume</h2>
                            </div>
                            <div className="pull-right" style={{width: 100+"px", marginRight: 5+"px"}}>
                                <select className="form-control select">
                                    <option>All</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="timeline" style={{marginTop: 15}}>
                        
                        <div className="timeline-item timeline-main">
                            <div className="timeline-date">2018</div>
                        </div>

                        <div className="timeline-item timeline-main">
                            <div className="timeline-date">2017</div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-item-info">May 2017</div>
                            <div className="timeline-item-icon"><span className="fa fa-briefcase"></span></div>
                            <div className="timeline-item-content">
                                <div className="timeline-heading">
                                    <a>Ricky</a> joined at <a target="_blank" href="http://ibstower.com" rel="noopener noreferrer">PT. INTI BANGUN SEJAHTERA, TBK</a>
                                </div>
                                <div className="timeline-body">
                                    <img src="/assets/images/logo_ibs.png" className="img-text" width="100" align="left" alt="image3"/>
                                    <p>
                                        <b>WEB DEVELOPER</b><br/>
                                        Industries : IT/Computer - Software Engineer - Telecomunication
                                    </p>
                                    <p>
                                        By end of August 2012, IBS was successfully listed as a publicly traded corporation in Indonesia. 
                                        Today, IBS is one of Indonesia's "big four" publicly traded independent tower companies in the country. IBS infrastructure is ...
                                        <a target="_blank" href="http://ibstower.com" rel="noopener noreferrer"> read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item timeline-main">
                            <div className="timeline-date">2016</div>
                        </div>

                        <div className="timeline-item timeline-item-right">
                            <div className="timeline-item-info">Aug 2016</div>
                            <div className="timeline-item-icon"><span className="fa fa-briefcase"></span></div>
                            <div className="timeline-item-content">
                                <div className="timeline-heading">
                                    <a>Ricky</a> joined at <a target="_blank" href="http://gmf-aeroasia.co.id/" rel="noopener noreferrer">PT. GMF AEROASIA</a>
                                </div>
                                <div className="timeline-body">
                                    <img src="/assets/images/logo_gmf.jpeg" className="img-text" width="100" align="left" alt="image3"/>
                                    <p>
                                        <b>WEB DEVELOPER</b><br/>
                                        Industries : Maskapai / Aviasi (IT, Engineering & Technical)
                                    </p>
                                    <p>
                                        Starting out in 1949, GMF AeroAsia originated as the Technical Division of Garuda Indonesia Airlines at the Kemayoran and Halim Perdanakusuma airports in Jakarta, 
                                        Indonesia. In 1984, GMF AeroAsia was relocated ...
                                        <a target="_blank" href="http://gmf-aeroasia.co.id/" rel="noopener noreferrer"> read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-item-info">May 2016</div>
                            <div className="timeline-item-icon"><span className="fa fa-briefcase"></span></div>
                            <div className="timeline-item-content">
                                <div className="timeline-heading">
                                    <a>Ricky</a> joined at <a target="_blank" href="http://pentasi.net/" rel="noopener noreferrer">PT. PENTA SOFTWARE INDONESIA</a>
                                </div>
                                <div className="timeline-body">
                                    <img src="/assets/images/logo_pentasi.png" className="img-text" width="100" align="left" alt="image3"/>
                                    <p>
                                        <b>WEB DEVELOPER</b><br/>
                                        Industries : IT/Computer - Software Engineer
                                    </p>
                                    <p>
                                        Didirikan oleh sebuah komunitas masyarakat teknologi informasi berawal dari ketertarikan akan teknologi komputer yang menjadi tulang punggung utama dalam teknologi informasi, kami mencoba mencermati keadaan dan ...
                                        <a target="_blank" href="http://pentasi.net/" rel="noopener noreferrer"> read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item timeline-item-right">
                            <div className="timeline-item-info">Jan 2016</div>
                            <div className="timeline-item-icon"><span className="fa fa-map-marker"></span></div>
                            <div className="timeline-item-content">                                        
                                <div className="timeline-body padding-0">
                                    {/*
                                    <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31724.30157767455!2d108.32500859527588!3d-6.324285646085828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab3588ec9283cc52!2sBadan+Penanaman+Modal+dan+dan+Perizinan+(BPMP)+Kabupaten+Indramayu!5e0!3m2!1sid!2sid!4v1519716736815" 
                                    width="100%" height="150px" frameBorder="0" style={{border:0}}></iframe> 
                                    */}

                                </div>                         
                                <div className="timeline-heading">
                                    <a>Ricky</a> worked onsite project at <a target="_blank" href="http://bpmp.indramayukab.go.id/" rel="noopener noreferrer">BPMP KAB. INDRAMAYU</a>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item timeline-main">
                            <div className="timeline-date">2015</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-item-info">Dec 2015</div>
                            <div className="timeline-item-icon"><span className="fa fa-graduation-cap"></span></div>
                            <div className="timeline-item-content">
                                <div className="timeline-heading">
                                    <a>Ricky</a> graduated from <a target="_blank" href="http://uniku.ac.id" rel="noopener noreferrer">UNIVERSITAS KUNINGAN</a>
                                </div>
                                <div className="timeline-body">
                                    <img src="/assets/images/logo_uniku.png" className="img-text" width="100" align="left" alt="image3"/>
                                    <p>
                                        <b>BACHELOR DEGREE</b><br/>
                                        Information Systems Department, Faculty of Computer Science
                                    </p>
                                    <p>
                                        Univesitas Kuningan (UNIKU) didirikan sebagai perwujudan dari idealisme dan komitmen Yayasan Pendidikan Sang Adipati Kuningan untuk terus menerus berkarya khususnya dalam bidang ...
                                        <a target="_blank" href="http://uniku.ac.id" rel="noopener noreferrer"> read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item timeline-main">
                            <div className="timeline-date">2014</div>
                        </div>
                        
                        <div className="timeline-item timeline-item-right">
                            <div className="timeline-item-info">Feb 2014</div>
                            <div className="timeline-item-icon"><span className="fa fa-briefcase"></span></div>
                            <div className="timeline-item-content">
                                <div className="timeline-heading">
                                    <a>Ricky</a> joined at <a target="_blank" href="http://cendanasolusindo.co.id" rel="noopener noreferrer">CENDANA SOLUSINDO</a>
                                </div>
                                <div className="timeline-body">
                                    <img src="/assets/images/logo_cs.png" className="img-text" width="100" align="left" alt="image3"/>
                                    <p>
                                        <b>WEB DEVELOPER</b><br/>
                                        Industries : IT/Computer - Software Engineer
                                    </p>
                                    <p>
                                         Usaha-usaha jasa yang meliputi jaringan telekomunikasi dan Teknologi Informatika; Usaha Pemasangan jaringan/network kabel; Jasa konsultan di bidang komputer dan rekayasa informatika, jasa komputer, hardware dan ...
                                        <a target="_blank" href="http://cendanasolusindo.co.id" rel="noopener noreferrer"> read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item timeline-main">
                            <div className="timeline-date"><a><span className="fa fa-ellipsis-h"></span></a></div>
                        </div>                                
                    </div>

                </div>

            </div>
        );
    }
}

export default Dashboard;
