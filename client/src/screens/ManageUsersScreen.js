import React from "react";
import { fetchAllUsers } from "../helpers";
import {
  Header,
  Divider,
  Container,
  Dimmer,
  Segment,
  Loader,
} from "semantic-ui-react";
import { PaneContent } from "../components";

export class ManageUsersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sysUsers: [],
    };
  }

  componentDidMount() {
    fetchAllUsers().then((users) => {
      this.setState({ sysUsers: users });
    });
  }

  render() {
    const { sysUsers } = this.state;
    console.log(sysUsers);
    if (sysUsers.length !== 0) {
      let userKeys = Object.keys(sysUsers[0]);
      return (
        <Container fluid className="bg-white p-5" style={{ height: "100vh" }}>
          <div>
            <Header as="h2" floated="left" color="red">
              Manage Users
            </Header>
            <Divider clearing />
          </div>
          {sysUsers && (
            <PaneContent tableKeys={userKeys} tableData={sysUsers} />
          )}
        </Container>
      );
    } else {
      return (
        <div>
          <Segment>
            <Dimmer active>
              <Loader content="loading">Fetching Data</Loader>
            </Dimmer>
          </Segment>
        </div>
      );
    }
  }
}
