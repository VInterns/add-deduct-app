import React from "react";
import XLSX from "xlsx";
import PropTypes from "prop-types";
import { TeamBodyNotice, TeamBodyUpload } from "../components";
import { Divider } from "semantic-ui-react";

export class TeamBody extends React.Component {

    constructor(props) {
        super(props);
        this.fileHandler = this.fileHandler.bind(this);
    }

    fileHandler(file) {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = ({ target: { result } }) => {
            const workBook = XLSX.read(result, { type: rABS ? "binary" : "array" });
            const workSheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[workSheetName];
            const workSheetData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
            this.props.displayData(workSheetData);
        }
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    }

    render() {
        return (
            <div>
                <TeamBodyNotice teamName={this.props.team} fileName={this.props.file} />
                <TeamBodyUpload handleFile={this.fileHandler} />
                <div className='pl-3 pr-3 mt-1'>
                    <Divider />
                </div>
            </div>
        );
    }
}

TeamBody.propTypes = {
    team: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    displayData: PropTypes.func.isRequired
}