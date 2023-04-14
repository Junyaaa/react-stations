import React from 'react';
import { useState, useEffect } from 'react';
import {BreedsSelect} from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(result => {
      setBreeds(Object.keys(result.message))
    })
    
  }, [])

  const handleChange = e => setSelectedBreed(e.target.value);
  return (
    <div>
      <BreedsSelect
      breeds={breeds}
      onChange={handleChange}
      value= {selectedBreed}
      />
    </div>
  )
  
}

