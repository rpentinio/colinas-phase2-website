import React, { Component } from 'react';

export class ListMembers extends Component {
    static displayName = ListMembers.name;

    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: true
        };
    }

    componentDidMount() {
        this.populateMembersData();
    }

    static renderMembersTable(members) {
        return (
            <table className='table table-striped' aria-labelledby="membersList">
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Nickname</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Block/Lot</th>
                        <th>Street Name</th>
                        <th>Phase</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member =>
                        <tr key={member.residentId}>
                            <td>{member.lastName}</td>
                            <td>{member.firstName}</td>
                            <td>{member.nickname}</td>
                            <td>{member.email}</td>
                            <td>{member.phoneNumber}</td>
                            <td>{member.blockLot}</td>
                            <td>{member.streetName}</td>
                            <td>{member.phase}</td>
                            <td>{member.residnetStatus}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ListMembers.renderMembersTable(this.state.members);

        return (
            <div>
                <h1 id="membersList">List Of Members</h1>
                {contents}
            </div>
        );
    }

    async populateMembersData() {
        const response = await fetch('residentslist');
        const data = await response.json();
        this.setState({ members: data, loading: false });
    }
}