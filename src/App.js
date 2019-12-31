import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import firebase from 'services/firebase';
import { useAuth } from 'hooks';
import { HOME, LOGIN } from 'utils/routes';

const MainPage = lazy(() => import('pages/main'));
const Login = lazy(() => import('pages/login'));

function App ({ location }) {
  const { userInfo, setUserInfo } = useAuth();
  const [didCheckUserIn, setDidCheckUserIn] = useState(false);

  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: true,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
      setDidCheckUserIn(true)
    });
  }, [setUserInfo]);

  if (!didCheckUserIn) {
    return <h1>Carregando</h1>
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<h1>Carregando</h1>}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
