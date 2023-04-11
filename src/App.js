import './app.css'
import React, { useState } from 'react'

export const App = () => {
  // const dogUrl : any;
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/puggle/IMG_151824.jpg");
}

function Dog() {
  return (
    <div>
      <header>trail</header>
      <body>
        <img src={dogUrl} alt="犬の写真です" />
      </body>
    </div>
  );
}