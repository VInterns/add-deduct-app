import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { TeamHeader, HRTeamBody, HRTeamTable } from "../components";

// Collections
const FILES = [
  "salary-adjustment.xlsx",
  "overtime.xlsx",
  "net-expenses.xlsx",
  "night-shift-amount-days.xlsx",
  "lost-hours.xlsx",
  "overtime-reward-gross.xlsx",
  "no-show-detailed.xlsx",
  "no-shows.xlsx",
  "incentives-gross.xlsx",
  "incentives-net.xlsx",
  "mobile-bill.xlsx",
  "sick-leave-detailed.xlsx",
  "sick-leave-cons.xlsx",
  "ukde-referral-prog-net-amount.xlsx",
  "award-gross-amount.xlsx",
  "gym.xlsx",
  "penalties-detailed.xlsx",
  "on-call.xlsx",
  "profile-change.xlsx"
];

export const HRTeam = props => {
  return (
    <Container fluid className="bg-light p-5" style={{ height: "160vh" }}>
      <div className="offset-md-2 col-md-8 border bg-white rounded p-5">
        <TeamHeader team={props.teamName} />
        <HRTeamBody />
        <HRTeamTable body={FILES} header={props.tableHeader} />
      </div>
    </Container>
  );
};

HRTeam.protoTypes = {
  teamName: PropTypes.string.isRequired,
  tableHeader: PropTypes.string.isRequired
};
