import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class FileItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">Serial Number</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>Name</h3>
                            <p>Description</p>
                            <p><strong>Uploaded Date: </strong>Date</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to="/">
                                    <li className="list-group-item update">
                                        <i className="fas fa-file-download"> Download</i>
                                    </li>
                                </Link>
                                <li className="list-group-item delete" >
                                    <i className="fa fa-minus-circle pr-1"> Delete</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ConnectedFileItem= connect(null, null)(FileItem);

export default ConnectedFileItem;