import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

export class TeamBodyNotice extends React.Component {
    render() {
        return (
            <div className='container-fluid mt-5'>
                <Message>
                    Download the accepted sample for the {this.props.teamName.toLowerCase()} team data
                    <a
                        href={this.props.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        <strong> here.</strong>
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