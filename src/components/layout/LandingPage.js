import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">File Management System</h1>
                                <p className="lead">
                                    Please log in to start managing your files!
                                </p>
                                <hr />
                                <Link to="/signup" className="btn btn-lg btn-primary mr-2">
                                    Sign Up
                                </Link>
                                <Link to="/signin" className="btn btn-lg btn-secondary mr-2">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ConnectedLandingPage= connect(null, null)(LandingPage);

export default ConnectedLandingPage;