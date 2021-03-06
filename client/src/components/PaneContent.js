import React from "react";
import PropTypes from "prop-types";
import { Table, Pagination } from "semantic-ui-react";
import { TeamTableHeader, TeamTableBody, NoData } from "../components";

export class PaneContent extends React.Component {
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
              <TeamTableBody rows={dataPerPage} />
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
        </div>
      );
    }
  }
}

PaneContent.propTypes = {
  tableKeys: PropTypes.arrayOf(String).isRequired,
  tableData: PropTypes.arrayOf(Object),
};
