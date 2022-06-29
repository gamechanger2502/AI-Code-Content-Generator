import React from 'react';
import { Component } from 'react'
import logo from '../faviocn.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

class Navigation extends Component {
    render() {
        return (
            <div> 
                <Navbar bg = "dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
                    <Navbar.Brand href="/">
                        <img src = {logo} width="60px" height={"45px"}/>
                        AI Generator
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="content"> Content</Nav.Link>
                            <Nav.Link href="code"> Code </Nav.Link> 
 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
} 

export default Navigation; 