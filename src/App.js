import * as React from 'react'
import { useState } from 'react'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    <img src="https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6051.jpg"></img>
  );
}

function Dog() {
  return (
    <div>
      <header>trail</header>
      <body>
      {useState}
      </body>
    </div>
  );
}