import React from "react";
import download from "downloadjs";
import PropTypes from "prop-types";
import {
    Table,
    Icon,
    Button,
    Header,
    Label
} from "semantic-ui-react";
import { EXPORT_DATA_API } from "../api";

export const HRTeamTable = (props) => {
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan={2}>
                            <Header as="h3" className="p-3">{props.header}</Header>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body className="p-5">
                    {props.body.map((file, index) => {

                        return (
                            <Table.Row key={index}>
                                <Table.Cell collapsing verticalAlign='middle'>
                                    <Label className="bg-white" size="large">
                                        <Icon name="file excel" color="green" size="large" />
                                        {file}
                                    </Label>
                                </Table.Cell>
                                <Table.Cell verticalAlign='middle' textAlign="center" collapsing>
                                    <Button
                                        icon
                                        basic
                                        size="tiny"
                                        onClick={async (event) => {
                                            event.preventDefault();
                                            let API_URL = EXPORT_DATA_API + `?file_name=${file}`;
                                            let res = await fetch(API_URL);
                                            let blob = await res.blob();
                                            download(blob, file);
                                        }}
                                    >
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
    header: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired
}