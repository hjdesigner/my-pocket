import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME } from 'utils/routes';
import { Header } from 'components';

const Home = React.lazy(
  () => import('pages/home')
);

const Main = () => (
  <>
    <Header />
    <Suspense fallback='Loading...'>
      <Switch>
        <Route
          path={HOME}
          exact
          component={Home}
        />
      </Switch>
    </Suspense>
  </>
);

export default Main;
