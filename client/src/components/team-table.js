import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import { TeamTableHeader, TeamTableBody } from "../components";

export class TeamTable extends React.Component {
    render() {
        return (
            <div className="p-3">
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <TeamTableHeader header={this.props.headerArray}/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <TeamTableBody rows={this.props.bodyArray}/>
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


// RenderRow Component
// const RenderRow = (props) => {
//     let keys = Object.keys(props.keys[0]);
//     return keys.map((key, index) => {
//         return <td key={props.data[key]}>{props.data[key]}</td>
//     })
// }

// RenderBody Component
// const RenderBody = (props) => {
//     return props.rows.map((row, index) => {
//         return (
//             <Table.Row key={index}>
//                 <RenderRow key={index} data={row} keys={props.rows}/>
//             </Table.Row>
//         )
//     })
// }