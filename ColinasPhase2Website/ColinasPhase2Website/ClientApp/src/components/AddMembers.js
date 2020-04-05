import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

export class AddMembers extends Component {
    static displayName = AddMembers.name;

    constructor(props) {
        super(props);

        this.changedHandler = this.changedHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            lastName: "",
            firstName: "",
            nickname: "",
            email: "",
            phoneNumber: "",
            blockLot: "",
            streetName: "",
            phase: "",
            residentStatus: ""
        }
    }

    changedHandler(event) {
        if (event != null) {
            this.setState({ [event.target.id]: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state;
        const dataold = {
            'lastName': 'test',
            'firstName': 'test',
            'nickname': 'test',
            'email': 'test@gmail.com',
            'phoneNumber': 'test',
            'blockLot': 'test',
            'street': 'test',
            'phase': 'test',
            'status': 'test'
        };

        fetch('ResidentsAdd/Add', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    }

    displayForm() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="nickname">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Nickname" onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number" onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="blockLot">
                        <Form.Label>Block/Lot</Form.Label>
                        <Form.Control type="text" placeholder="Enter Block/Lot" onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="streetName">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" placeholder="Enter Street" onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="phase">
                        <Form.Label>Phase</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phase" onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="residentStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter Status" onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        );
    }

    render() {
        return (
            <div>
                {this.displayForm()}
            </div>
        );
    }
}