import React, {Component} from 'react';

export default class Alert extends Component {
    render() {
        return (
            <div className="message-box animated fadeIn" data-sound="alert" id="mb-signout">
                <div className="mb-container">
                    <div className="mb-middle">
                        <div className="mb-title"><span className="fa fa-sign-out"></span> Log <strong>Out</strong> ?</div>
                        <div className="mb-content">
                            <p>Are you sure you want to log out?</p>                    
                            <p>Press No if youwant to continue work. Press Yes to logout current user.</p>
                        </div>
                        <div className="mb-footer">
                            <div className="pull-right">
                                <a href="pages-login.html" className="btn btn-success btn-lg">Yes</a>
                                <button className="btn btn-default btn-lg mb-control-close">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}