import React, { useState } from 'react';

function Dog() {
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
