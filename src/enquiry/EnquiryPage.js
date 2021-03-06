import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './EnquiryPage.css'
export class EnquiryPage extends Component {
    render() {

        return (
            <Jumbotron id="enquire">
                <h2 align="left">Have a query? Write to us...</h2>
                <br></br>
                <Form >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="John Doe" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail" required>
                        <Form.Label column sm={2}>
                            Email
                    </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="email" placeholder="john.doe@xyz.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Contact Number
                    </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Your query
                    </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="textarea" placeholder="Type your query here..." rows={4} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 1, offset: 2 }}>
                            <Button variant="outline-secondary" type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Jumbotron>
        );

    }
}
export default EnquiryPage