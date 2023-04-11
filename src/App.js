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
        <p>犬の写真です。</p>
        <img src={dogUrl}/>
      </body>
    </div>
  );
}