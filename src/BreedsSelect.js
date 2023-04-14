import React from 'react';

function BreedsSelect({ breeds, selectedBreed, handleBreedChange }) {
return (
<select value={selectedBreed} onChange={handleBreedChange}>
<option value=''>Select a breed</option>
{breeds.map((breed) => (
<option key={breed} value={breed}>
{breed}
</option>
))}
</select>
);
}

export default BreedsSelect;