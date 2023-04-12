import React, { useState } from 'react';

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6051.jpg'
  );

  const handleButtonClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogUrl(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>新しい犬の画像を取得</button>
      <Dog dogUrl={dogUrl} />
    </div>
  );
};

function Dog(props) {
  const { dogUrl } = props;

  return (
    <div>
      <header class="title">trail</header>
      <img src={dogUrl} alt="犬の写真です。" />
    </div>
  );
}
