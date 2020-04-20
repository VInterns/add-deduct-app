import React from "react";
import { Icon } from "semantic-ui-react";
import { ButtonWB } from "../components";
import Workbook from "react-excel-workbook";

export class AdditionRow extends React.Component {
    render() {
        let fileName = "addition";
        return (
            <div className="d-flex flex-row bg-light border rounded justify-content-between align-items-center mt-2 p-3">
                <div className="d-flex flex-row">
                    <Icon name="file excel" color="green" size="large" />
                    <p className="lead ml-2">{fileName + '.xlsx'}</p>
                </div>
                <div className="align-self-end">
                    <Workbook filename={fileName + '.xlsx'} element={<ButtonWB />}>
                    </Workbook>
                </div>
            </div>
        )
    }
}