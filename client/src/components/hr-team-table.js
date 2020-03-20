import React from "react";
import PropTypes from "prop-types";
import { Table, Icon, Button } from "semantic-ui-react";
import { TeamTableHeader } from "../components";

export const HRTeamTable = (props) => {
    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <TeamTableHeader header={props.header} />
                    </Table.Row>
                </Table.Header>
                <Table.Body className="p-5">
                    {props.body.map((row, index) => {
                        let { fileName, lastUploadBy, lastUploadAt } = row;
                        return (
                            <Table.Row key={index}>
                                <Table.Cell collapsing verticalAlign='middle'>
                                    <Icon name="file excel outline" color="green" size="large"/>
                                    {fileName}
                                </Table.Cell>
                                <Table.Cell verticalAlign='middle'>{lastUploadBy}</Table.Cell>
                                <Table.Cell verticalAlign='middle'>{lastUploadAt}</Table.Cell>
                                <Table.Cell verticalAlign='middle'>
                                    <Button icon basic size="tiny">
                                        <Icon name="download" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

HRTeamTable.propTypes = {
    header: PropTypes.arrayOf(String).isRequired,
    body: PropTypes.array.isRequired
}