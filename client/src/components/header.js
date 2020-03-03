import React from "react";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { bindActionCreators } from "redux";

import { logout } from "../state";
export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      err: "",
      uploadUsers: ["admin", "hr"],
      resignReqUsers: ["admin", "manager", "hr"],
      smcUsers: ["admin", "smc"],
      wfUsers: ["admin", "wf"],
      ccConsumerUsers: ["admin", "cc"],
      astUsers: ["admin", "ast"],
      eltUsers: ["admin", "elt"],
      shtUsers: ["admin", "sht"],
      hrViewUsers: ["admin", "hr"],
      csUsers: ["admin", "cs"],
      myResignations: ["admin", "manager"]
    };
  }

  static mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      account: state.auth.account
    };
  }

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
  }

  checkAuth = (allowed_users, user_roles) => {
    const found = allowed_users.some(r => user_roles.indexOf(r) >= 0);
    return found;
  };

  render() {
    if (!this.props.isAuthenticated) {
      return null;
    }
    return (
      <Navbar style={{ backgroundColor: "#BE0002" }} variant="dark">
        <Navbar.Brand>Leaver App</Navbar.Brand>
        <Nav className="mr-auto">
          {this.checkAuth(this.state.uploadUsers, this.props.account.roles) && (
            <Nav.Link href="/upload_employees">Upload Employees</Nav.Link>
          )}
          {this.checkAuth(this.state.uploadUsers, this.props.account.roles) && (
            <Nav.Link href="/upload_users">Upload Users</Nav.Link>
          )}
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
          {this.checkAuth(
            this.state.myResignations,
            this.props.account.roles
          ) && <Nav.Link href="/my-resignations">My Resignations</Nav.Link>}
          <Nav.Link
            position="right"
            onClick={() => {
              this.props.logout();
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export const ConnectedHeader = connect(
  Header.mapStateToProps,
  Header.mapDispatchToProps
)(Header);
