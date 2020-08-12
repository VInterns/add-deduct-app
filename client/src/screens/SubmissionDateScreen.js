import React from "react";
import DatePicker from "react-datepicker";
import { DEADLINE_SUBMIT_API } from "../api";
import "react-datepicker/dist/react-datepicker.css";
import { Header, Divider, Container, Form, Button } from "semantic-ui-react";

export class SubmissionDateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
    };
  }

  changeHandler = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  submitHandler = () => {
    const { selectedDate } = this.state;
    fetch(DEADLINE_SUBMIT_API, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        endDate: selectedDate,
      }),
    })
      .then((res) => res.json())
      .then((msg) => {
        console.log(msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let { selectedDate } = this.state;
    return (
      <Container fluid className="bg-white p-5" style={{ height: "100vh" }}>
        <div>
          <Header as="h2" floated="left" color="red">
            Submission Date Deadline
          </Header>
          <Divider clearing />
        </div>
        <Form className="shadow rounded p-5">
          <Form.Field className="d-flex flex-row justify-content-between">
            <label>Select Submission Date for All Teams</label>
            <DatePicker
              peekNextMonth
              showYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
              selected={selectedDate}
              onChange={this.changeHandler}
              className="rounded bg-white border border-dark p-2 text-center"
            />
          </Form.Field>
          <Button color="red" fluid onClick={this.submitHandler}>
            Submit Date
          </Button>
        </Form>
      </Container>
    );
  }
}
