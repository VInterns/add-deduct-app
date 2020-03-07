import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

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
        <NavItem>
          <NavLink href="/components/">Salary Adjustment</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/components/">Over Time</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/components/">Net Expenses</NavLink>
        </NavItem>
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
                <center> <iframe name="frame1" width="95%" height="100%" > </iframe> </center>
            </center>
        </div>
        )
    }
}