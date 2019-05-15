import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './navigation/routes';

function App() {
  return (
      <Switch>
          {routes.map(route => {
              if (route.private){
                  //We handle private routes here
                  return (
                      <Route
                          key={route.path}
                          path={route.path}
                          component={route.component}
                          exact={route.exact}
                      />
                  );
              }
              else{
                  //We handle public routes here
                  return (
                      <Route
                          key={route.path}
                          path={route.path}
                          component={route.component}
                          exact={route.exact}
                      />
                  );
              }
          })}
      </Switch>
  )
}

export default App;
