import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

export class TeamTable extends React.Component {
    constructor(props) {
        super(props);
        // this.renderBody = this.renderBody.bind(this);
    }

    renderBody = (
        this.props.bodyArray.map((row, i) => {
            return (
                <Table.Row key={i}>
                    <Table.Cell>{row[i]}</Table.Cell>
                </Table.Row>
            )
        })
    )

    renderHeader = (
        this.props.headerArray.map((cell, index) => {
            return <Table.HeaderCell key={index}>{cell}</Table.HeaderCell>
        })
    )

    render() {
        return (
            <div className="p-3">
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            {this.renderHeader}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderBody}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

TeamTable.propTypes = {
    headerArray: PropTypes.array.isRequired,
    bodyArray: PropTypes.array.isRequired
}