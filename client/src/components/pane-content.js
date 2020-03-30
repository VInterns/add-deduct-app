import React from "react";
import PropTypes from "prop-types";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Table } from "semantic-ui-react";
import { TeamTableHeader, TeamTableBody } from "../components";

export const PaneContent = (props) => {
    let { paneFile, tableKeys, tableData } = props;
    return (
        <div>
            <div className='d-flex flex-row mt-5'>
                <ReactHTMLTableToExcel
                    id='test-table-xls-button'
                    className='download-table-xls-button ui basic button'
                    table='data-table'
                    filename={paneFile}
                    sheet='Sheet1'
                    buttonText='Download as XLS'
                />
            </div>
            <Table id='data-table' celled striped>
                <Table.Header>
                    <Table.Row>
                        <TeamTableHeader header={tableKeys} />
                    </Table.Row>
                </Table.Header>
                {<Table.Body>
                    <TeamTableBody rows={tableData} />
                </Table.Body>}
            </Table>
        </div>
    )
}

PaneContent.propTypes = {
    paneFile: PropTypes.string.isRequired,
    tableKeys: PropTypes.arrayOf(String).isRequired,
    tableData: PropTypes.arrayOf(Object).isRequired
}