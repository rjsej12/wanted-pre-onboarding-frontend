import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles } from './commons/globalStyles';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
    </div>
  );
}

export default App;
