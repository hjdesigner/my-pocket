import React, { lazy, Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import firebase from 'services/firebase';
import { useAuth } from 'hooks';
import { HOME, LOGIN } from 'utils/routes';

const MainPage = lazy(() => import('pages/main'));
const Login = lazy(() => import('pages/login'));

function App ({ location }) {
  const { userInfo, setUserInfo } = useAuth();
  
  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        return setUserInfo({
          isUserLoggedIn: false,
        });
      }
      setUserInfo({
        isUserLoggedIn: !!user,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
    });
  }, [setUserInfo]);

  
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
