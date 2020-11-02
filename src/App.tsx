import React, { FC, Fragment } from 'react';
import Router from './router';
import { setRem } from './utils/helper';

const App: FC = (props: any) => {
  setRem(window);

  return (
    <Fragment>
      <Router {...props} />
    </Fragment>
  )
}

export default App;
