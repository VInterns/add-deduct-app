import React from "react";
import PropTypes from "prop-types";
import { Container} from "semantic-ui-react";
import {
    TeamHeader,
    TeamBody
} from "../components";

export class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            excelData: null
        }
        this.dataDisplayHandler = this.dataDisplayHandler.bind(this);
    }

    dataDisplayHandler(data){
        this.setState({
            excelData: data
        })
    }

    render() {
        console.table(this.state.excelData)
        return (
            <Container fluid className='bg-light p-5' style={{ height: '100vh' }}>
                <div className='offset-md-3 col-md-6 border bg-white rounded p-5'>
                    <TeamHeader name={this.props.teamName} />
                    <TeamBody
                        team={this.props.teamName}
                        file={this.props.filePath} 
                        displayData={this.dataDisplayHandler}/>
                </div>
            </Container>
        );
    }
}

Team.protoTypes = {
    teamName: PropTypes.string.isRequired,
    filePath: PropTypes.string.isRequired
}