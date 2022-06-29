import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Component } from 'react';
import { Card, Button, Nav } from 'react-bootstrap'; 


class Display extends Component {
    render() {
        const { header, title, text, theLink } = this.props
        return (
            <Card>
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {text}
                    </Card.Text>
                    <Nav.Link href={theLink}>
                        <Button variant="primary" size="lg" > Let's Go</Button>
                    </Nav.Link>
                </Card.Body>
            </Card>

        )
    }
}

export default Display 