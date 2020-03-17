import React from "react";
import XLSX from "xlsx";
import PropTypes from "prop-types";
import { message } from "antd";

export class TeamBodyUpload extends React.Component {

    checkFileType = (event) => {
        let file = event.target.files[0];
        let err = null;
        // allowed file types [excel files]
        const types = [
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ];
        if (types.every(type => file.type !== type)) {
            err = file.type + " is not a supported format\n";
        }
        if (err) {
            message.error(err);
            return false;
        } else {
            return true;
        }

    }

    handleUpload(event) {
        message.success(event.target.value)
    }

    render() {
        return (
            <div className="container-fluid mt-4">
                <div className="custom-file w-50">
                    <input type="file" className="custom-file-input" id="customFile" onChange={this.handleUpload} />
                    <label className="custom-file-label" htmlFor="customFile">Choose file...</label>
                </div>
            </div>
        );
    }
}
