import React from 'react';

export const BreedsSelect = ({ breeds, onChange, value }) => {
const selectList = breeds.map(breed => (
<option key={breed} value={breed}>
{breed}
</option>
));
return (
<select value={value} onChange={onChange}>
{selectList}
</select>
);
};