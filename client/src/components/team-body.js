import React from "react";
import PropTypes from "prop-types";
import { TeamBodyNotice, TeamBodyUpload } from "../components";

export class TeamBody extends React.Component {

    render() {
        return (
            <div className="p-3">
                <TeamBodyNotice teamName={this.props.team} fileName={this.props.file} />
                <TeamBodyUpload />
            </div>
        );
    }
}

TeamBody.propTypes = {
    team: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired
}