import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles } from './commons/styles/globalStyles';
import Router from './components/commons/router/Router';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Router />
    </div>
  );
}

export default App;
