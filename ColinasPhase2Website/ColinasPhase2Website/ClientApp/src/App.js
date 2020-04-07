import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ListMembers } from './components/ListMembers';
import { AddMembers } from './components/AddMembers';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/members-list' component={ListMembers} />
            <Route path='/add-members' render={(props) => <AddMembers {...props} isEdit={false} />} />
            <Route path='/edit-members/:residentId' render={(props) => <AddMembers {...props} isEdit={true} />} />
        </Layout>
    );
  }
}
