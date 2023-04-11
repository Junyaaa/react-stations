import * as React from 'react'
import { useState } from 'react'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6051.jpg"
  );
}

function Dog() {
  return (
    <div>
      <header>trail</header>
      <body>
        <img src={useState} alt="犬の写真です。"/>
      </body>
    </div>
  );
}