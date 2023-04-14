import React from 'react';

export const BreedsSelect = (props) => {
  const breeds = props.breeds;
  const selectList = breeds.map((breed) => {
    return (
      <option key={breed} value={breed}>{breeds}</option>
    )
  });
  return (
    <select value={props.value} onChange={props.onChange}>
      {selectList}
    </select>
  )
}
