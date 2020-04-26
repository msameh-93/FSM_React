import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hasError: false
        }
        this.clearError= this.clearError.bind(this);
    }
    clearError(e) {
        this.setState({
            hasError: false
        })
    }
    componentWillReceiveProps(recProps) {
        this.setState({
            hasError: recProps.hasError
        })
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }
    render() {
        if(this.state.hasError) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <hr /> 
                            <hr />
                            {
                                <div className="alert alert-danger text-center">
                                <strong>Unauthorized Access...</strong><br />
                                Return to homepage<br />
                                <Link to="/" onClick={this.clearError} className="btn btn-lg btn-info">
                                Home
                                </Link>
                                </div>
                            }
                            <hr />  
                            <hr />
                        </div>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

const mapStateToProps= (currState) => {
    if(currState.errorReduxStore.errors.notAuthAccess)
    {
        return {
            hasError: true
        }
    } else {
        return {
            hasError: false
        }
    }
}
const ConnectedErrorBoundary= connect(mapStateToProps, null)(ErrorBoundary);

export default ConnectedErrorBoundary;