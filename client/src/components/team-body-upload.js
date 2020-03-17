import React from "react";
import PropTypes from "prop-types";
import { Upload } from "antd";
import { Button, Icon } from "semantic-ui-react";

export class TeamBodyUpload extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            errorMessage: null
        }
    }

    fileHandler = (fileList) => {
        console.log("fileList", fileList);
        let fileObj = fileList;
        if (!fileObj) {
            this.setState({
                errorMessage: "No file uploaded!"
            });
            return false;
        }
        console.log("fileObj.type:", fileObj.type);
        if (
            !(
                fileObj.type === "application/vnd.ms-excel" ||
                fileObj.type ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            )
        ) {
            this.setState({
                errorMessage: "Unknown file format. Only Excel files are uploaded!"
            });
            return false;
        }
    }

    render() {
        return (
            <div className="row mt-3">
                <Upload
                    name="file"
                    beforeUpload={this.fileHandler}
                    onRemove={() => this.setState({ rows: [] })}
                    multiple={false}
                >
                    <Button basic>
                        <Icon name="upload" />
                        Upload an Excel File
                    </Button>
                </Upload>
            </div>
        );
    }
}