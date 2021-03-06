import React, { Component } from 'react'
import BusinessIcon from '@material-ui/icons/Business';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Jumbotron from 'react-bootstrap/Jumbotron'
export class ContactPage extends Component {
    render() {

        return (
            <>
            <h2>Contact Us!</h2>
            <Jumbotron style={{ backgroundColor: 'pink', backgroundSize: 'cover' }}>
                <h5>Rupal Nandanwar</h5>
                <BusinessIcon/>
                <label>111, XYZ street, ABC CIRCLE, Nagpur - 0000000, Maharashtra, IN</label>
                <br/>
                <CallIcon/>
                <label>+91 99999 99999</label>
                <br/>
                <MailIcon/>
                <label>abc@example.com</label>
                <br/>
            </Jumbotron>
            <Jumbotron class="contact">
                <h5>Rupal Nandanwar</h5>
                <BusinessIcon/>
                <label>111, XYZ street, ABC CIRCLE, Nagpur - 0000000, Maharashtra, IN</label>
                <br/>
                <CallIcon/>
                <label>+91 99999 99999</label>
                <br/>
                <MailIcon/>
                <label>abc@example.com</label>
                <br/>
            </Jumbotron>
            </>
        );
    }
}
export default ContactPage;