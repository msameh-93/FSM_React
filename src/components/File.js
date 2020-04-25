import React, {Component} from "react";
import {connect} from "react-redux";
import classnames from "classnames";

import {addFile} from "./../actions/fileActions";

class File extends Component {
    constructor(props) {
        super(props);
        this.state= {
            file: null,
            filename: "",
            description: "",
            errors: {}
        }
        this.onFileChange= this.onFileChange.bind(this);
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
    onFileChange(e) {
        e.preventDefault();
        this.setState({
            file: e.target.files[0],
            filename: e.target.files[0].name
        })
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const formData= new FormData();
        formData.append("filename", this.state.filename);
        formData.append("description", this.state.description);
        formData.append("file", this.state.file);
        
        this.props.addFile(formData, this.props.history);
    }
    render() {
        const {errors}= this.state;
        return (
            <div>  
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Upload a file</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input 
                                                type="file" 
                                                accept=".txt,.pdf"
                                                className={classnames("form-control form-control-lg", {
                                                    "is-invalid": errors.filename
                                                })} 
                                                name="file" 
                                                onChange={this.onFileChange}/>
                                            {errors.file && (
                                            <div className="invalid-feedback">
                                              {errors.file}
                                            </div>
                                          )}
                                        </div>
                                    </div>
                                    <hr />
                                    <hr />
                                    <div className="form-group">
                                        <input type="text" 
                                        disabled
                                        className={classnames("form-control form-control-lg", {
                                                    "is-invalid": errors.filename
                                                })} 
                                        placeholder="File Name"
                                        name="filename"
                                        value={this.state.filename}
                                        onChange={this.onChange} />
                                        {errors.filename && (
                                            <div className="invalid-feedback">
                                              {errors.filename}
                                            </div>
                                          )}
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.description
                                        })} 
                                        placeholder="File Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}></textarea>
                                        {errors.description && (
                                            <div className="invalid-feedback">
                                              {errors.description}
                                            </div>
                                          )}
                                    </div>
                                    <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (storeState) => {
    return {
        myErrors: storeState.errorReduxStore.errors
    }
}
const connectedFile= connect(mapStateToProps, {addFile})(File);

export default connectedFile;