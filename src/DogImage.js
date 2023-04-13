// DO NOT DELETE
import React from 'react'
import './App.css'

const DogImage = ({ props}) => {
  return (
    <img src={props.url} alt="犬の写真です。" />
  );
}

export { DogImage };
