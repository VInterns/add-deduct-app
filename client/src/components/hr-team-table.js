import React from "react";
import PropTypes from "prop-types";
import {
    Icon,
    Button,
    Tab
} from "semantic-ui-react";

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
        <div>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        </div>
    )
}

HRTeamTable.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired
}
