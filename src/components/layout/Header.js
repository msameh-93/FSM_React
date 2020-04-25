import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {signOut} from "./../../actions/userAction";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
            valid: false
        }
        this.onClick= this.onClick.bind(this);
    }
    componentWillReceiveProps(recProps) {
        this.setState({
            valid: recProps.myValid
        })
    }
    onClick(e) {
        this.props.signOut();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                {
                    this.state.valid &&
                    <div className="collapse navbar-collapse navbar-brand" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                Welcome [Full Name]
                                </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link onClick={this.onClick} to="/" className="btn btn-sm btn-warning">
                                    Sign Out
                                    </Link>
                                </li>
                            </ul>
                    </div>
                }
                </div>
            </nav>
        );
    }
}

const mapStateToProps= (currState) => {
    return {
        myValid: currState.userReduxStore.valid
    }
}

const ConnectedHeader= connect(mapStateToProps, {signOut})(Header);

export default ConnectedHeader;