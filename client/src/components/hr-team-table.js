import React from "react";
import download from "downloadjs";
import PropTypes from "prop-types";
import {
    Table,
    Icon,
    Button,
    Header,
    Label,
    Tab
} from "semantic-ui-react";
import { EXPORT_DATA_API } from "../api";

const panes = [
    { menuItem: 'Salary Adjustment', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Over Time', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Net Expenses', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Night Shift Amount Days', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Lost Hours', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Overview Reward Gross ', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'No Show Detailed', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'No Shows', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Incentives Gross ', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Incentives Net', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Mobile Bill', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Sick Leave Detailed', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Sick Leave Cons', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'UK-DE Referral Prog Net Amount', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Award Gross Amount', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'GYM', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Penalties Detailed', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'On Call', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
     { menuItem: 'Profile Change', render: () => <Tab.Pane><Button icon basic  > <Icon name="download" /> Download</Button></Tab.Pane> },
    
]

export const HRTeamTable = (props) => {
    return (
 /*        <div>
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
            </Table> */
            <div>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            
            </div>
    )
}

HRTeamTable.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired
}
