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
            residentId: "",
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

    componentDidMount() {
        if (this.props.isEdit) {
            this.getUserToEdit(this.props.match.params.residentId);
        }
    }

    changedHandler(event) {
        if (event != null) {
            this.setState({ [event.target.id]: event.target.value });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = this.state;

        // Edit Member
        if (this.props.isEdit) {
            let response = await fetch('ResidentsAdd/Edit', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            let result = await response.json();
            alert(result);

            // TODO: Redirect to home page
        }
        // Add Member
        else {
            let response = await fetch('ResidentsAdd/Add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            let result = await response.json();
            alert(result);

            // Clear the form contents
            this.setState({
                lastName: "",
                firstName: "",
                nickname: "",
                email: "",
                phoneNumber: "",
                blockLot: "",
                streetName: "",
                phase: "",
                residentStatus: ""
            });
        }
    }

    getUserToEdit(residentId) {
        let param = encodeURIComponent(residentId);

        fetch('ResidentsAdd/GetResident?residentId=' + param)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    residentId: result.residentId,
                    lastName: result.lastName,
                    firstName: result.firstName,
                    nickname: result.nickname,
                    email: result.email,
                    phoneNumber: result.phoneNumber,
                    blockLot: result.blockLot,
                    streetName: result.streetName,
                    phase: result.phase,
                    residentStatus: result.residentStatus
                });
            });
    }

    displayForm() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" value={this.state.firstName} onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="nickname">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Nickname" value={this.state.nickname} onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={this.state.email} onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number" value={this.state.phoneNumber} onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="blockLot">
                        <Form.Label>Block/Lot</Form.Label>
                        <Form.Control type="text" placeholder="Enter Block/Lot" value={this.state.blockLot} onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="streetName">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" placeholder="Enter Street" value={this.state.streetName} onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="phase">
                        <Form.Label>Phase</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phase" value={this.state.phase} onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="residentStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter Status" value={this.state.residentStatus} onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        );
    }

    render() {
        let pageLabel = "Add Member";
        if (this.props.isEdit) {
            pageLabel = "Edit Member";
        }

        return (
            <div>
                <h1 id="pageLabel">{pageLabel}</h1>
                {this.displayForm()}
            </div>
        );
    }
}