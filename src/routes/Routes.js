import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../clients/components/dashboard/Dashboard';
import Users from '../clients/components/users/Users';

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/list-users" component={Users} />
  </Switch>
);
