import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

export class TeamBodyNotice extends React.Component {
    render() {
        return (
            <div className='container-fluid mt-4'>
                <Message warning>
                    <Message.Header>Important</Message.Header>
                    {"Please use the following "}
                    <a
                        href={this.props.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        <strong>sample excel sheet</strong>
                    </a>
                    {" for the " + this.props.teamName.toLowerCase() + " data entry."}
                </Message>
            </div>
        );
    }
}

TeamBodyNotice.protoTypes = {
    teamName: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired
}