import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getAllFiles} from "./../actions/fileActions";

import FileItem from "./FileItem";

class Dashboard extends Component {
    componentDidMount(e) {
        this.props.getAllFiles();
    }
    render() {
        const {myFiles}= this.props;
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
        myErrors: storeState.errorReduxStore.errors
    }
}
const ConnectedDashboard= connect(mapStateToProps, {getAllFiles})(Dashboard);

export default ConnectedDashboard;

