import * as React from 'react'
import './App.css'
import { useState } from 'react'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6051.jpg");

  return (
    <Dog dogUrl={dogUrl} />
  );
}

function Dog(props) {
  const { dogUrl } = props;

  return (
    <div>
      <header>trail</header>
      <img src={dogUrl} alt="犬の写真です。"/>
    </div>
  );
}
