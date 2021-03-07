import React from 'react';
import './NavBarComp.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const NavBarComp = () => (
    <>
        <Navbar className="color-nav" expand="lg" variant="dark" >
            <Navbar.Brand href="/"id="logo">Dream-Render</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    <Nav.Link href="/explore">Explore</Nav.Link>
                    <NavDropdown title="Our Services" id="basic-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/enquiry">Enquiry</Nav.Link>
                    <Nav.Link href="/contactus">Contact Us</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                    <Button className="search" variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default NavBarComp;