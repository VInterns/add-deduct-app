import React from "react";
import _ from 'lodash';
import PropTypes from "prop-types";
import { SUBMIT_DATA_API } from "../api";
import { Container } from "semantic-ui-react";
import { TeamHeader, TeamBody, TeamTable } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excelData: [],
      totalCount: 0
    };
    this.dataDisplayHandler = this.dataDisplayHandler.bind(this);
    this.submitTableHandler = this.submitTableHandler.bind(this);
  }

  dataDisplayHandler(data) {
    let { tableHeader } = this.props;
    let header = tableHeader.map(value => {
      return _.camelCase(value);
    })

    if (JSON.stringify(data[0]) === JSON.stringify(header)) {
      toast.success("Your file has been uploaded.", {
        className: "bg-success font-weight-bold",
        progressClassName: 'progress-bar bg-white'
      })
      this.setState({
        excelData: data,
        totalCount: data.length - 1
      });
    } else {
      toast.error("Wrong file. Please use the file provided in the Before Upload section.", {
        className: "bg-danger rounded font-weight-bold",
        progressClassName: 'progress-bar bg-white'
      })
    }
  }

  submitTableHandler(event) {
    event.preventDefault();
    let collectionName = this.props.collection;
    let data = this.state.excelData;

    // prevent submit when wrong file if chosen
    if (data.length > 0) {
      fetch(SUBMIT_DATA_API, {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify({
          what_to_submit: data,
          where_to_submit: collectionName
        })
      }).then(() => {
        toast.success("Data successfully submitted.", {
          className: "bg-success font-weight-bold",
          progressClassName: 'progress-bar bg-white'
        });
      }).catch(err => {
        toast.error("Failed to submit data to db." + err, {
          className: "bg-danger rounded font-weight-bold",
          progressClassName: 'progress-bar bg-white'
        });
      });
    } else {
      toast.error("Data won't be submitted, wrong file has been uploaded.", {
        className: "bg-danger rounded font-weight-bold",
        progressClassName: 'progress-bar bg-white'
      })
    }
  }

  render() {
    return (
      <Container fluid className="bg-light p-5" style={{ height: "100vh" }}>
        <div className="offset-md-1 col-md-10 border bg-white rounded p-5">
          <TeamHeader team={this.props.teamName} />
          <TeamBody
            team={this.props.teamName}
            file={this.props.filePath}
            displayData={this.dataDisplayHandler}
            onSubmitTable={this.submitTableHandler}
          />
          <TeamTable
            headerArray={this.props.tableHeader}
            bodyArray={this.state.excelData}
            totalCount={this.state.totalCount}
          />
          <ToastContainer />
        </div>
      </Container>
    );
  }
}

Team.propTypes = {
  teamName: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  tableHeader: PropTypes.arrayOf(String).isRequired
};
