// DO NOT DELETE

// import * as React from 'react'
// import './App.css'
import React, { useState } from 'react';

const App = () => {
  // stateを定義
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/puggle/IMG_151824.jpg');

  return (
    <div>
      <header>trail</header>
      <body>
        <img src={dogUrl} alt="犬の写真です" />
      </body>
    </div>
  );
}

export default App;
