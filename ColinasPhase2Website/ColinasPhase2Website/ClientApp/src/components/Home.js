import React, { Component } from 'react';
import '../styles/Home.css';

export class Home extends Component {
    static displayName = Home.name;

    onCounterBtnClick = () => {
        this.props.history.push(`/counter`);
    }

    onFetchDataBtnClick = () => {
        this.props.history.push(`/fetch-data`);
    }

    onMembersListClick = () => {
        this.props.history.push(`/members-list`);
    }

  render () {
    return (
        <div className="home-main-div">
            <div className="home-side-divs"></div>
            <div className="home-middle-div">
                <table className="home-buttons-table">
                    <tbody>
                        <tr>
                            <td>
                                <button className="btn btn-primary btn-lg home-buttons" onClick={this.onCounterBtnClick}>Counter</button>
                            </td>
                            <td>
                                <button className="btn btn-primary btn-lg home-buttons" onClick={this.onFetchDataBtnClick}>Fetch Data</button>
                            </td>
                            <td>
                                <button className="btn btn-primary btn-lg home-buttons" onClick={this.onMembersListClick}>Members List</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="home-side-divs"></div>
        </div>
    );
  }
}
