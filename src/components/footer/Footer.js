import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BusinessIcon from '@material-ui/icons/Business';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
const FooterComp = () => (
    <Jumbotron inline id="outer">
        <Container fluid className="text-center text-md-left">
            <Row>
                <Col md="3">
                    <h5 className="logo">DREAM-RENDER</h5>
                    <p><a href="/">
                        Display logo here</a>
                    </p>
                </Col>
                <Col>
                    <h5 className="title">CONTACT</h5>
                    <br></br>
                    <BusinessIcon id="con-icon" />
                    <label className="text">
                        111, XYZ street, ABC CIRCLE, Nagpur - 0000000, Maharashtra, IN
                                    </label >
                    <br />
                    <CallIcon id="con-icon" />
                    <label className="text">+91 99999 99999</label>
                    <br />
                    <MailIcon id="con-icon" />
                    <label className="text"> abc@example.com</label>
                    <br />
                </Col>
                <Col md="3">
                    <h5 className="title">FOLLOW US</h5>
                    <ul>
                        <li className="list-unstyled">
                            <a href="#!"><InstagramIcon id="icon" /></a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!"><FacebookIcon id="icon" /></a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!"><LinkedInIcon id="icon" /></a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <div >
            <Container className="copyright" fluid>
                &copy; {new Date().getFullYear()} All rights reserved
            </Container>
        </div>
    </Jumbotron>
);

export default FooterComp;