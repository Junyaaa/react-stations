import React from 'react';
import './App.css';
import {Header} from './Header';
import {Description} from './Description';

const App = () => {
  return (
    <div className="App">
      <Header className="hero" title="dog"/>
      <Description Description="犬の画像"/>
    </div>
  );
}

// export default App;
