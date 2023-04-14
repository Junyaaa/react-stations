import React, { useState } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
const [breeds, setBreeds] = useState([]);
const [selectedBreed, setSelectedBreed] = useState('');
const [dogImages, setDogImages] = useState([]);

const handleChange = e => setSelectedBreed(e.target.value);

const handleShowImages = () => {
fetch('https://dog.ceo/api/breed/hound/images/random/3')
.then(res => res.json())
.then(result => {
setDogImages(result.message)
})
};

const imageList = dogImages.map(imageUrl => (
<img key={imageUrl} src={imageUrl} alt={selectedBreed} />
));

return (
<div>
<BreedsSelect
     breeds={breeds}
     onChange={handleChange}
     value={selectedBreed}
   />
<button onClick={handleShowImages}>表示</button>
<div>{imageList}</div>
</div>
);
};