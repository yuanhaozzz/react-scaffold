import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Test from '@/views/test';

const Router: FC<{}> = () => {

  return (
    <BrowserRouter basename='/test/'>
      <Switch>
        <Route exact path='/' component={Test} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;