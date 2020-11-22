import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';

export const Routing = () => {
  const isLogin = Boolean(localStorage.getItem('user'));
  //const isLogin = true;
  console.log('Login: ', isLogin);
  return (
    <div>
      <Switch>
        {routes.map((route, i) => {
          if (isLogin) {
            return ( <Route key={i} exact={route.exact} path={route.path} component={route.component} /> );
          } else {
            if (route.auth === false) {
              return ( <Route key={i} exact={route.exact} path={route.path} component={route.component} /> );
            } else { 
                return ( <Redirect to='/login' /> )
            }
          }
        })}
      </Switch>
    </div>
  );
};
