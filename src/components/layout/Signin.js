import React, {Component} from "react";
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";

import {signIn} from "./../../actions/userAction";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            password: "",
            errors: {}
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    componentWillReceiveProps(recProps) {
        console.log("RECIEVED", recProps);
        if(recProps.myError) {
            this.setState({
                errors: recProps.myError
            })
        }
        if(recProps.myValid) {
            this.props.history.push("/dashboard");
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const loginReq= {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signIn(loginReq);
    }
    render() {
        const {errors}= this.state;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            {
                                errors.username && 
                                (
                                    <div className="alert alert-danger text-center">
                                    <strong>Sign up instead?</strong><br />
                                    <Link to="/signup" className="btn btn-lg btn-info">
                                    Sign Up
                                    </Link>
                                    </div>
                                )
                            }
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.username
                                        })} 
                                        placeholder="Email Address" 
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChange} />
                                        {errors.username && (
                                            <div className="invalid-feedback">
                                              {errors.username}
                                            </div>
                                          )}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.password
                                        })}  
                                        placeholder="Password" 
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                        {errors.password && (
                                            <div className="invalid-feedback">
                                              {errors.password}
                                            </div>
                                          )}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps= (currState) => {
    return {
        myUser: currState.userReduxStore.user,
        myError: currState.errorReduxStore.errors,
        myValid: currState.userReduxStore.valid
    }
}

const ConnectedSignin= connect(mapStateToProps, {signIn})(Signin);

export default ConnectedSignin;