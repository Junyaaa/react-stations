// DO NOT DELETE
import React, { useState } from 'react';
import './App.css';
import { DogImage } from './DogImage';

const Description = () => {
const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6051.jpg");

const handleUpdateClick = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then (res => res.json())
.then(
data => {
setDogUrl(data.message);
},
error => {
setDogUrl(error.message)
},
)
}

return (
<div>
<p>This is a website where you can view pictures of dogs.</p>
<DogImage url={dogUrl} />
<button onClick={handleUpdateClick}>Update</button>
</div>
);
}

export { Description };