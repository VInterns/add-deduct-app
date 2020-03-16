import React from "react";
import {Header} from "semantic-ui-react";

export class UploadFile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "p-2">
                <Header as = "h4">Upload Your Excel File Here</Header>
                <div className='custom-file'>
                    <input type='file' className='custom-file-input' id='customFile' />
                    <label className='custom-file-label text-left' htmlFor='customFile'>Select a file...</label>
                </div>
            </div>
        );
    }
}
