import React, { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from '@pages';
import DefaultTemplate from '../templates/DefaultTemplate';
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultTemplate>
          <Route path="/" component={MainPage} exact />
        </DefaultTemplate>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;