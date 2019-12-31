import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME } from 'utils/routes';

const Home = React.lazy(
  () => import('pages/home')
);

const Main = () => (
  <Suspense fallback='Loading...'>
    <Switch>
      <Route
        path={HOME}
        exact
        component={Home}
      />
    </Switch>
  </Suspense>
);

export default Main;
