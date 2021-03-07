import React, { Component } from 'react'
import BusinessIcon from '@material-ui/icons/Business';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import './ContactPage.css'
export class ContactPage extends Component {
    render() {

        return (
            <>
                <div className="contactdiv" ></div>
                <CardDeck>
                    <Card id="card" className="p-3 mb-2" text="light">
                        <Card.Body>
                            <div align="left">
                                <Card.Title id="card-title"> Rupal Nandanwar </Card.Title>
                                <Card.Text>
                                    <BusinessIcon id="icon" />
                                    <label className="text">
                                        111, XYZ street, ABC CIRCLE, Nagpur - 0000000, Maharashtra, IN
                                    </label >
                                    <br />
                                    <CallIcon id="icon" />
                                    <label className="text">+91 99999 99999</label>
                                    <br />
                                    <MailIcon id="icon" />
                                    <label className="text"> abc@example.com</label>
                                    <br />
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card id="card" className="p-3 mb-2" text="light">
                        <Card.Body>
                            <div align="left">
                                <Card.Title id="card-title"> Rupal Nandanwar </Card.Title>
                                <Card.Text>
                                    <BusinessIcon id="icon" />
                                    <label className="text">
                                        111, XYZ street, ABC CIRCLE, Nagpur - 0000000, Maharashtra, IN
                                    </label >
                                    <br />
                                    <CallIcon id="icon" />
                                    <label className="text">+91 99999 99999</label>
                                    <br />
                                    <MailIcon id="icon" />
                                    <label className="text"> abc@example.com</label>
                                    <br />
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </>
        );
    }
}
export default ContactPage;