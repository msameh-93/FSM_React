import React, {Component} from "react";
import {connect} from "react-redux";
import classnames from "classnames";

class File extends Component {
    constructor(props) {
        super(props);
        this.state= {
            errors: {}
        }
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
                                    <div className="form-group">
                                        <input type="text" 
                                        className={classnames("form-control form-control-lg", {
                                                    "is-invalid": errors.name
                                                })} 
                                        placeholder="Project Name"
                                        name="File Name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                        {errors.name && (
                                            <div className="invalid-feedback">
                                              {errors.name}
                                            </div>
                                          )}
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.description
                                        })} 
                                        placeholder="Project Description"
                                        name="File Description"
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

const connectedFile= connect(null, null)(File);

export default connectedFile;