import React from "react";
import PropTypes from "prop-types";
import {
    Container
} from "semantic-ui-react";
import {
    TeamHeader,
    TeamBody,
    TeamTable
} from "../components";

export class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            excelData: []
        }
        this.dataDisplayHandler = this.dataDisplayHandler.bind(this);
    }

    dataDisplayHandler(data) {
        this.setState({
            excelData: data
        })
    }

    render() {
        return (
            <Container fluid className='bg-light p-5' style={{ height: '100vh' }}>
                <div className='offset-md-2 col-md-8 border bg-white rounded p-5'>
                    <TeamHeader team={this.props.teamName} />
                    <TeamBody
                        team={this.props.teamName}
                        file={this.props.filePath}
                        displayData={this.dataDisplayHandler}
                    />
                    <TeamTable headerArray={this.props.tableHeader} bodyArray={this.state.excelData} />
                </div>
            </Container>
        );
    }
}

Team.propTypes = {
    teamName: PropTypes.string.isRequired,
    filePath: PropTypes.string.isRequired,
    tableHeader: PropTypes.arrayOf(String).isRequired
}