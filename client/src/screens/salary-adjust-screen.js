import React from "react";
import { Team } from "../components";

let fileLink = "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/d0867743375c8fdcec5152090ecdba64/samples-sa.xlsx"
export class SalaryAdjustmentScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Team teamName = 'Salary Adjustment' filePath={fileLink}/>
        );
    }
} 