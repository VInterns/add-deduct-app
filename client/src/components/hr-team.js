import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { TeamHeader, HRTeamTable } from "../components";

export const HRTeam = (props) => {
  return (
    <Container fluid className="bg-light p-5" style={{ height: "160vh" }}>
      <div className="offset-md-1 col-md-10 border bg-white rounded p-5">
        <TeamHeader team={props.teamName} />
        <HRTeamTable header={props.tableHeader} />
      </div>
    </Container>
  );
};

HRTeam.protoTypes = {
  teamName: PropTypes.string.isRequired,
  tableHeader: PropTypes.string.isRequired
};
