import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { 
    TeamHeader, 
    HRTeamBody,
    HRTeamTable
} from "../components";

const FILES = [
    {"fileName": "salary_adjustment_grouped.xlsx", "lastUploadBy": "Islam", "lastUploadAt": "20-03-2020, 17:13"},
    {"fileName": "salary_adjustment_grouped.xlsx", "lastUploadBy": "Islam", "lastUploadAt": "20-03-2020, 17:13"},
    {"fileName": "salary_adjustment_grouped.xlsx", "lastUploadBy": "Islam", "lastUploadAt": "20-03-2020, 17:13"}
]


export const HRTeam = (props) => {
    return (
        <Container fluid className='bg-light p-5' style={{ height: '100vh' }}>
            <div className='offset-md-2 col-md-8 border bg-white rounded p-5'>
                <TeamHeader team={props.teamName} />
                <HRTeamBody/>
                <HRTeamTable header={props.tableHeader} body={FILES}/>
            </div>
        </Container>
    )
}

HRTeam.protoTypes = {
    teamName: PropTypes.string.isRequired,
    tableHeader: PropTypes.arrayOf(String).isRequired
}