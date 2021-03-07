import React, { Component } from 'react'
import BusinessIcon from '@material-ui/icons/Business';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Contact from './contactus_banner.jpg'
import Container from 'react-bootstrap/Container'
export class ContactPage extends Component {
    render() {

        return (
            <>
                <div className="contactdiv"
                    style={{
                        backgroundImage: "url('https://www.o2power.in/wp-content/uploads/2020/09/contact.jpg')",
                        width: "100%",
                        height: "350px",
                        backgroundRepeat: "no-repeat"
                    }} ></div>
                <br></br>
                <CardDeck>
                    <Card
                        // bg="secondary"
                        style={{
                            width: '35%',
                            backgroundColor: 'black',
                            borderRadius: 8
                            , borderColor: 'transparent', boxShadow: '5px 5px 5px 5px grey',
                            opacity: "75%"
                        }}
                        className="p-3 mb-2 shadow-box-example z-depth-5"
                        text="light"
                    >

                        <Card.Body className="card-details">
                            <div align="left">
                                <Card.Title style={{
                                    fontFamily: 'Papyrus'
                                }}> Rupal Nandanwar </Card.Title>
                                <Card.Text>
                                    <BusinessIcon style={{//fill: "black",
                                        //backgroundColor:"white",
                                        //borderRadius:"50%",
                                        fontSize: "40px",
                                        align: "center"
                                    }} />
                                    <label id='text'>
                                        111, XYZ street, ABC CIRCLE, Nagpur - 0000000, Maharashtra, IN
                                    </label>
                                    <br />
                                    <CallIcon style={{//fill: "black",
                                        //backgroundColor:"white",
                                        //borderRadius:"50%",
                                        fontSize: "40px",
                                        align: "center"
                                    }} />
                                    <label
                                        style={{
                                            color: "#fff",
                                            marginLeft: "18px",
                                            fontSize: "16px"
                                        }}>+91 99999 99999</label>
                                    <br />
                                    <MailIcon style={{//fill: "black",
                                        //backgroundColor:"white",
                                        //borderRadius:"50%",
                                        fontSize: "40px",
                                        align: "center"
                                    }} />
                                    <label
                                        style={{
                                            color: "#fff",
                                            marginLeft: "18px",
                                            fontSize: "16px"
                                        }}> abc@example.com</label>
                                    <br />
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card
                        bg="dark"
                        style={{ width: '35%' }}
                        className="p-3 mb-2"
                        text="light"
                    >

                        <Card.Body>
                            <div align="left">
                                <Card.Title > Rupal Nandanwar </Card.Title>
                                <Card.Text>
                                    <BusinessIcon />
                                    <label id="lb">111, XYZ street, ABC CIRCLE, Nagpur - 0000000, Maharashtra, IN</label>
                                    <br />
                                    <CallIcon />
                                    <label >+91 99999 99999</label>
                                    <br />
                                    <MailIcon />
                                    <label>abc@example.com</label>
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