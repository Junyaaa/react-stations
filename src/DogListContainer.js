import React, { useState, useEffect } from 'react';
import { DogImage } from './DogImage';

const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedBreedImages, setSelectedBreedImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        const breedsList = Object.keys(data.message);
        setBreeds(breedsList);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if(selectedBreed !== "") {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/10`)
        .then(res => res.json())
        .then(data => {
          setSelectedBreedImages(data.message);
        })
        .catch(err => console.log(err));
    } else {
      setSelectedBreedImages([]);
    }
  }, [selectedBreed]);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  }

  return (
    <div>
      <label htmlFor="breeds">Select a breed:</label>
      <select id="breeds" value={selectedBreed} onChange={handleBreedChange}>
        <option value="">--Please choose a breed--</option>
        {breeds.map(breed => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
      <div>
        {selectedBreedImages.map((url, index) => (
          <DogImage key={index} url={url} />
        ))}
      </div>
    </div>
  );
};

export { DogListContainer };
