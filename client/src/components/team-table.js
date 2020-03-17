import React from "react";
import PropTypes from "prop-types";
import {Table } from "semantic-ui-react";
import {
    TeamTableHeader,
    TeamTableBody
} from "../components";


export class TeamTable extends React.Component{
    render() {
        return (
            <Table celled>
                <TeamTableHeader headerArray = {this.props.header}/>
                <TeamTableBody bodyData = {this.props.body}/>
            </Table>
        );
    }
}

TeamTable.propTypes = {
    header: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired
}