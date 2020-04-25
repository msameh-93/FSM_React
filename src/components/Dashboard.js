import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getAllFiles} from "./../actions/fileActions";

import FileItem from "./FileItem";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state= {
            errors: false
        }
    }
    componentWillReceiveProps(recProps) {
        if(recProps.myValid) {
            this.setState({
                errors: recProps.myValid
            })
        }
    }
    componentDidMount(e) {
        this.props.getAllFiles();
    }
    render() {
        const {myFiles, myValid}= this.props;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/addFile" className="btn btn-lg btn-info">
                            Upload
                            </Link>
                            <br />
                            <hr /> 
                            <hr />
                            {
                                !myValid && 
                                (
                                    <div className="alert alert-danger text-center">
                                    <strong>Invalid log in credentials...</strong><br />
                                    Please log in to use the File Management Tool!<br />
                                    <Link to="/signin" className="btn btn-lg btn-info">
                                    Login
                                    </Link>
                                    </div>
                                )
                            }
                            {
                                myFiles.length === 0 && myValid && 
                                (
                                    <div className="alert alert-success text-center">
                                    Welcome to your Personal File Management Tool...<br />
                                    Press <strong>Upload</strong> to start uploading files!<br />
                                    </div>
                                )
                            }
                            {
                                myFiles &&
                                myFiles.map(el => {
                                    return (<FileItem key={el.id} file={el} />);
                                })
                            }                        
                            <br />
                            <hr />  
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps= (storeState) => {
    return {
        myFiles: storeState.fileReduxStore.files,
        myValid: storeState.userReduxStore.valid
    }
}
const ConnectedDashboard= connect(mapStateToProps, {getAllFiles})(Dashboard);

export default ConnectedDashboard;

