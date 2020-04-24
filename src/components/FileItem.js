import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {deleteFile} from "./../actions/fileActions";

class FileItem extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick= this.onDeleteClick.bind(this);
    }
    onDeleteClick(e) {
        e.preventDefault();
        console.log(`Deleting ${this.props.file.id}`);
    }
    render() {
        const {file}= this.props;
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">Serial Number</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{file.filename}</h3>
                            <p>{file.description}</p>
                            <p><strong>Uploaded Date: </strong>{file.uploadedDate}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to="/" >
                                    <li className="list-group-item update">
                                        <i className="fas fa-file-download"> Download</i>
                                    </li>
                                </Link>
                                <li className="list-group-item delete" onClick={this.onDeleteClick}>
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

const ConnectedFileItem= connect(null, {deleteFile})(FileItem);

export default ConnectedFileItem;