import React from "react";
import PropTypes from "prop-types";
import { Header, Divider } from "semantic-ui-react";

export class TeamHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header as='h2' floated='left'>
                    {this.props.name + " Team"}
                </Header>
                <Divider clearing />
            </div>
        );
    }
}

TeamHeader.protoTypes = {
    name: PropTypes.string.isRequired
}