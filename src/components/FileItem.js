import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "bootstrap";
import bootbox from "bootbox";

import {deleteFile, downloadFile, updateFile} from "./../actions/fileActions";

class FileItem extends Component {
    constructor(props) {
        super(props);
        this.onUpdateClick= this.onUpdateClick.bind(this);
        this.onDeleteClick= this.onDeleteClick.bind(this);
        this.onDownloadClick= this.onDownloadClick.bind(this);
    }
    onUpdateClick(e) {
        bootbox.prompt("Insert new name: ", (input) => { 
            const formData= new FormData();
            formData.append("id", this.props.file.id);
            formData.append("filename", input);

            this.props.updateFile(formData, this.props.update);
        });
    }
    onDownloadClick(e) {
        this.props.downloadFile(this.props.file.id, this.props.file.filename);
    }
    onDeleteClick(e) {
        bootbox.confirm("Are you sure you want to delete this file?", (result) => {
            if(result){
                this.props.deleteFile(this.props.file.id);
            }
        })
    }
    render() {
        const {file}= this.props;
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">Serial Number<br/>{this.props.file.serial}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{file.filename}</h3>
                            <p>{file.description}</p>
                            <p><strong>Upload Date: </strong>{file.uploadedDate}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to="/dashboard" onClick={this.onDownloadClick} >
                                    <li className="list-group-item update">
                                        <i className="fas fa-file-download"> Download</i>
                                    </li>
                                </Link>
                                <Link to="/dashboard" onClick={this.onUpdateClick} >
                                    <li className="list-group-item update">
                                        <i className="far fa-window-restore"> Rename File Name</i>
                                    </li>
                                </Link>
                                <li className="list-group-item delete" onClick={this.onDeleteClick}>
                                    <i className="fa fa-minus-circle pr-1"> Delete</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

const ConnectedFileItem= connect(null, {deleteFile, downloadFile, updateFile})(FileItem);

export default ConnectedFileItem;