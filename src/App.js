import './app.css'
import React, { useState } from 'react'

export const App = () => {
  // const dogUrl : any;
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6051.jpg");
}

function Dog() {
  return (
    <div>
      <header>trail</header>
      <body>
        <p>https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6051.jpg</p>
        <img src={dogUrl}/>
      </body>
    </div>
  );
}