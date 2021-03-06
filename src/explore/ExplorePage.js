import React, { Component } from 'react'
import { Card, Button, CardColumns } from 'react-bootstrap'
import Card1Img from './React.png'

export class ExplorePage extends Component {
    render() {
        return (
            <>
            
                <h2>Explore..</h2>
                <br/>

                <CardColumns>
                    <Card bg="light" style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={Card1Img} alt="Image..." style={{ height: '125px' }} />
                        <Card.Body>
                            <Card.Title>Card Title1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card bg="light"  style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Card1Img} alt="Image..." style={{ height: '125px' }} />
                        <Card.Body>
                            <Card.Title>Card Title1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card bg="light"  style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={Card1Img} alt="Image..." style={{ height: '125px' }} />
                        <Card.Body>
                            <Card.Title>Card Title1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <br />
                    <Card bg="light"  style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={Card1Img} alt="Image..." style={{ height: '125px' }} />
                        <Card.Body>
                            <Card.Title>Card Title1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <br />
                    <Card bg="light"  style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={Card1Img} alt="Image..." style={{ height: '125px' }} />
                        <Card.Body>
                            <Card.Title>Card Title1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>

            </>
        );
    }
}

export default ExplorePage;