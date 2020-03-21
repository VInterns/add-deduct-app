import React, { Component } from 'react';
import iframe from 'bootstrap'
import { Table } from 'reactstrap';
import { Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export class HrView extends Component {
    constructor() {
        super();
        this.state = {
            data: []

        };

        this.checkStatus = this.checkStatus.bind(this);
    }

    checkStatus(status){
        switch(status){
            case "pending":
                return (
                <td style = {{color: "#BE0002", fontWeight: "bold", textTransform: "uppercase"}}>{status}</td>
                );
            case "done": 
            return (
                <td style = {{color: "#5cb85c", fontWeight: "bold", textTransform: "uppercase"}}>{status}</td>
            );
            default:
                return (
                <td style = {{color: "#34a1fd", fontWeight: "bold", textTransform: "uppercase"}}>{status}</td>
                );
        }
    }
   

    render() {
        return (
            <div className = "container-fluid">
                <center style = {{margin: "25px"}}>
                <header className="ast-header"> 
                    <hr/>
                    <h3>Human Resources Team</h3>
                    <hr/>
                    
                    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
      <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            View
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" target = 'frame1' hover onClick={()=>{







            }}>Salary Adjustment</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Over Time</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
            <DropdownItem tag="a" href="/blah" target = 'frame1' hover>Net Expenses</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <Nav className = "ml-auto" navbar >
      <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Download
          </DropdownToggle>
          <DropdownMenu>
            <a href="/upload_users" target= "frame1"><DropdownItem href="/upload_users" hover>Salary Adjustment</DropdownItem></a>
            <DropdownItem tag="a" href="/blah" hover>Over Time</DropdownItem>
            <DropdownItem tag="a" href="/blah" hover>Net Expenses</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
                </header>
        
            </center>

        <div class="embed-responsive embed-responsive-16by9">
          <iframe name = "frame1" class="embed-responsive-item" ></iframe>
        </div>   
        </div>
        )
    }
}