import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import {
    TeamTableHeader,
    TeamTableBody,
    TeamTablePageSize
} from "../components";

export class TeamTable extends React.Component {
    render() {
        let { totalCount, headerArray, bodyArray } = this.props;
        let rows = bodyArray.slice(1);
        return (
            <div className="p-3">
                <div className='row'>
                    <TeamTablePageSize
                        limit={'10'}
                        onChangeHandler={this.limitHandler}
                    />
                    {"  Total Count: " + totalCount}
                </div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <TeamTableHeader header={headerArray} />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <TeamTableBody rows={rows} />
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

TeamTable.propTypes = {
    headerArray: PropTypes.array.isRequired,
    bodyArray: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired
}
