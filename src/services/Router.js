import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../config/routes';
import _ from 'lodash';

export default () => (
  <Switch>
    {_.map(routes, (item, index) => {
      return <Route exact {...item} />;
    })}
  </Switch>
);
