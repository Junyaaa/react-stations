import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import BreedSelect from './BreedsSelect';

function DogListContainer() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    };
    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchDogImages = async () => {
      if (selectedBreed !== '') {
        const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);
        const data = await response.json();
        setDogImages(data.message);
      }
    };
    fetchDogImages();
  }, [selectedBreed]);

  return (
    <div className="App">
      <h1>Dog Breed Images</h1>
      <BreedSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      {selectedBreed !== '' ? (
        <div className="dog-image-list">
          {dogImages.map((image, index) => (
            <img key={index} src={image} alt={`Dog ${index}`} />
          ))}
        </div>
      ):
      (
        <p>Please select a breed to display images.</p>
      )}
    </div>
  );
}

export default DogListContainer;
