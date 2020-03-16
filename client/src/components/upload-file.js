import XLSX from "xlsx";
import React from "react";
import PropTypes from "prop-types";
import {
    Header,
    Progress,
    Button
} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export class UploadFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: 0,
            jsonData: null,
            fileName: 'Choose a file...',
            readyUpload: false
        }
    }

    checkMimeType = event => {
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
            toast.error(err);
            return false;
        } else {
            return true;
        }
    };

    //Setting file size limit
    checkFileSize = event => {
        let file = event.target.files[0];
        let size = 1000 * 1000 * 20;
        let err = "";
        // (file.size)
        // (size)
        if (file.size > size) {
            err = file.type + "is too large, please pick a smaller file\n";
        }
        if (err) {
            toast.error(err);
            return false;
        } else {
            return true;
        }
    };

    checkLength = even => {
        if (even.target.files.length !== 1) {
            toast.error("Must select one excel sheet");
            return false;
        }
        return true;
    };

    //On click choose file
    onChangeHandler = event => {
        if (
            this.checkLength(event) &&
            this.checkMimeType(event) &&
            this.checkFileSize(event)
        ) {
            // If return true, convert the data to JSON to be ready to be sent to backend
            
            let chosen = event.target.value.replace("C:\\fakepath\\", "");

            this.setState({
                fileName: chosen,
                readyUpload: true
            });

            toast.success(chosen + ' successfully uploaded')

            let workBook = null;
            let jsonData = null;
            const reader = new FileReader();
            reader.onload = onloadEvent => {
                const data = reader.result;
                workBook = XLSX.read(data, { type: "binary" });
                jsonData = XLSX.utils.sheet_to_json(
                    workBook.Sheets[workBook.SheetNames[0]]
                );
                this.setState({
                    jsonData: jsonData
                });
            };
            if (event.target.files.length === 1) {
                reader.readAsBinaryString(event.target.files[0]);
            }
        }
    };

    render() {
        return (
            <div className='mt-4'>
                <Header size = 'tiny'>{"Upload " + this.props.name + " File"}</Header>
                <div className='custom-file'>
                    <input type='file' className='custom-file-input' id='customFile' onChange={this.onChangeHandler} />
                    <label className='custom-file-label text-left' htmlFor='customFile'>{this.state.fileName}</label>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}

UploadFile.protoTypes = {
    name: PropTypes.string.isRequired
}