import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import FileItem from "./FileItem";

class Dashboard extends Component {
    render() {
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
                            <FileItem />
                            <br />
                            <hr />  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ConnectedDashboard= connect(null, null)(Dashboard);

export default ConnectedDashboard;

