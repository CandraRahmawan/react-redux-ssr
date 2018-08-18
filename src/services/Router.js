import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../config/routes';
import _ from 'lodash';
import component from './registerPageComponent';

export default () => (
  <Switch>
    {_.map(routes, (item, index) => {
      if (_.isUndefined(component[item.component])) {
        throw new Error(
          `The Page Component ${
            item.component
          } is not registered, please add in src/clients/registerPageComponent.js`,
        );
      }
      return (
        <Route
          key={index}
          exact
          path={item.path}
          component={component[item.component]}
        />
      );
    })}
  </Switch>
);
