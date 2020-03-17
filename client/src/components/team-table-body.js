import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";


export class TeamTableBody extends React.Component{

    renderBody(){
        let body = this.props.bodyData;
        return body.map((key, index) => {
            return <Table.Cell key = {index}>{key}</Table.Cell>
        })
    }

    render() {
        return (
            <Table.Body>
                <Table.Row>
                    {this.renderBody}
                </Table.Row>
            </Table.Body>
        );
    }
}

TeamTableBody.propTypes = {
    bodyData: PropTypes.array.isRequired
}