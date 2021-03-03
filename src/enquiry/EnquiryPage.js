import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
export class EnquiryPage extends Component {
    render() {

        return (
            <>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your query</Form.Label>
                    <Form.Control as="textarea" placeholder = "Type your query here..." rows={3} />
                </Form.Group>
            </Form>
            <Button variant="outline-dark">Submit</Button>
            </>
        );
    }
}
export default EnquiryPage