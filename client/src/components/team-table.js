import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

export class TeamTable extends React.Component {
    constructor(props) {
        super(props);
        this.renderBody = this.renderBody.bind(this);
    }

    renderBody() {
        return this.props.bodyArray.map((key, index) => {
            return (
                <Table.Row key={index}>
                    <Table.Cell>{key}</Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <div className="p-3">
                <Table
                    celled
                    headerRow={this.props.headerArray}
                    tableData={this.props.bodyArray}
                    renderBodyRow={this.renderBody}
                />
            </div>
        );
    }
}

TeamTable.propTypes = {
    headerArray: PropTypes.array.isRequired,
    bodyArray: PropTypes.array.isRequired
}