import React from "react";
import PropTypes from "prop-types";
import { DELETE_USER } from "../api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { TeamTableHeader, NoData } from "../components";
import { Table, Pagination, Button } from "semantic-ui-react";

export class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: 10,
      dataPerPage: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    let { tableData } = props;
    let { activePage, pageSize, dataPerPage } = state;

    // Table first page data
    if (activePage === 1) {
      if (tableData === null) {
        return { dataPerPage: [] };
      }
      if (tableData !== dataPerPage) {
        let initialData = tableData.slice(0, pageSize);
        return { dataPerPage: initialData };
      }
    } else {
      // Other pages data
      let start = pageSize * (activePage - 1);
      let end = pageSize * activePage;
      let pageData = tableData.slice(start, end);
      return { dataPerPage: pageData };
    }
  }

  deleteHandler = (user) => {
    const API = DELETE_USER + "/" + user;
    fetch(API, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((msg) => {
        toast.success("Successfully deleted user", {
          className: "bg-success font-weight-bold",
          progressClassName: "progress-bar bg-white",
        });
      })
      .catch((err) => {
        toast.error(err, {
          className: "bg-danger rounded font-weight-bold",
          progressClassName: "progress-bar bg-white",
        });
      });
  };

  pagesHandler = (e, { activePage }) => {
    this.setState({ activePage });
  };

  render() {
    let { activePage, pageSize, dataPerPage } = this.state;
    let { tableKeys, tableData } = this.props;
    let colSpan = tableKeys.length;

    if (tableData) {
      let rowsCount = tableData.length;
      if (rowsCount === 0) {
        return <NoData />;
      }
      return (
        <div className="shadow rounded p-5 mt-5">
          <Table id="display-table" celled striped>
            <Table.Header>
              <Table.Row>
                <TeamTableHeader header={tableKeys} />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {dataPerPage.map((row, i) => {
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{row.username}</Table.Cell>
                    <Table.Cell>{row.status}</Table.Cell>
                    <Table.Cell>
                      <Button secondary>
                        {row.status === "deactivated"
                          ? "Activate Account"
                          : "Disable Account"}
                      </Button>
                      <Button
                        negative
                        onClick={() => this.deleteHandler(row.username)}
                      >
                        Delete Account
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan={colSpan}>
                  <Pagination
                    activePage={activePage}
                    totalPages={Math.ceil(rowsCount / pageSize)}
                    onPageChange={this.pagesHandler}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <ToastContainer />
        </div>
      );
    }
  }
}

UsersTable.propTypes = {
  tableKeys: PropTypes.arrayOf(String).isRequired,
  tableData: PropTypes.arrayOf(Object),
};
