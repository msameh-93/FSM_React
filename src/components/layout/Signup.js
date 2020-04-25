import React, {Component} from "react";
import {connect} from "react-redux";
import classnames from "classnames";

import {signUp} from "./../../actions/userAction";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state= {
            fullname: "",
            username: "",
            password: "",
            passwordConfirm: "",
            errors: {}
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    componentWillReceiveProps(recProps) {
        if(recProps.myErrors) {
            this.setState({
                errors: recProps.myErrors
            })
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser= {
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        }
        this.props.signUp(newUser, this.props.history);
    }
    render() {
        const { errors }= this.state;
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.fullname
                                        })} 
                                        placeholder="Name" 
                                        name="fullname"
                                        required
                                        value={this.state.fullname}
                                        onChange={this.onChange} />
                                        {errors.fullname && (
                                            <div className="invalid-feedback">
                                              {errors.fullname}
                                            </div>
                                          )}
                                </div>
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
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.passwordConfirm
                                        })} 
                                        placeholder="Confirm Password"
                                        name="passwordConfirm"
                                        value={this.state.passwordConfirm}
                                        onChange={this.onChange} />
                                        {errors.passwordConfirm && (
                                            <div className="invalid-feedback">
                                              {errors.passwordConfirm}
                                            </div>
                                          )}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToError= (currState) => {
    return {
        myErrors: currState.errorReduxStore.errors
    }
}
const ConnectedSignup= connect(mapStateToError, {signUp})(Signup);

export default ConnectedSignup;