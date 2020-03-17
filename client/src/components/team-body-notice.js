import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

export class TeamBodyNotice extends React.Component {
    render() {
        return (
            <div className='row'>
                <Message warning>
                    <Message.Header>
                        Important
                </Message.Header>
                    Download the accepted sample for the {this.props.teamName.toLowerCase()} team data
                <a
                        href={this.props.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        <strong> HERE.</strong>
                    </a>
                </Message>
            </div>
        );
    }
}

TeamBodyNotice.protoTypes = {
    teamName: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired
}