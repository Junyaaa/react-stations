import './app.css'
import React, { useState } from 'react'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(<img src='https://images.dog.ceo/breeds/puggle/IMG_151824.jpg'></img>);
}

function Dog() {
  return (
    <div>
      <header>trail</header>
      <body>
        <img src={dogUrl} alt="犬の写真です"></img>
      </body>
    </div>
  );
}