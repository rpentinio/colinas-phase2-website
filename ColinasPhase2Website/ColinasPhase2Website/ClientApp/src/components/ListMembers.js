import React, { Component } from 'react';
import '../styles/ListMembers.css';
//import DataTable from 'react-data-table-component';

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

    static renderHeaderAndButtons() {
        return (
            <div className="header-div">
                <h1 id="membersList">List Of Members</h1>
                <a href="/add-members" className="btn btn-primary" >Add</a>
            </div>
        );
    }

    static renderMembersTable(members) {
        //const data = members;
        //const columns = [
        //    {
        //        name: "Last Name",
        //        selector: "lastName",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "First Name",
        //        selector: "firstName",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "Nickame",
        //        selector: "nickname",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "Email",
        //        selector: "email",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "Phone Number",
        //        selector: "phoneNumber",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "Block/Lot",
        //        selector: "blockLot",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "Street Name",
        //        selector: "streetName",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "Phase",
        //        selector: "phase",
        //        sortable: true
        //    },
        //    {
        //        name: "Status",
        //        selector: "residentStatus",
        //        sortable: true,
        //        wrap: true
        //    },
        //    {
        //        name: "Actions",
        //        button: true,
        //        cell: row => <a href={"/edit-members/"} className="btn btn-link">Edit</a>
        //    },
        //];

        return (
            //<DataTable
            //    title="List Of Members"
            //    keyField="residentId"
            //    columns={columns}
            //    data={data}
            //    fixedHeader
            //    fixedHeaderScrollHeight="300px"
            ///>

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
                        <th>Actions</th>
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
                            <td>{member.residentStatus}</td>
                            <td>
                                <a href={"/edit-members/" + member.residentId } className="btn btn-link">Edit</a>
                            </td>
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
                {ListMembers.renderHeaderAndButtons()}
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