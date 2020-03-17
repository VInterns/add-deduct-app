import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";


export class TeamTableHeader extends React.Component{

    renderHeader() {
        let header = this.props.headerArray;
        return header.map((key, index) => {
            return <Table.HeaderCell key = {index}>{key}</Table.HeaderCell>
        })
    }

    render() {
        return (
            <Table.Header>
                <Table.Row>
                    {this.renderHeader}
                </Table.Row>
            </Table.Header>
        );
    }
}

TeamTableHeader.propTypes = {
    headerArray: PropTypes.array.isRequired
}