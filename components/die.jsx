import { useState } from 'react';

export default function Die({ index, value, onDiceSidesChange, sameSides }) {
  const [selectedSides, setSelectedSides] = useState(value || '');

  const handleDiceSidesChange = (e) => {
    const newValue = e.target.value
    setSelectedSides(newValue);
    onDiceSidesChange(newValue !== '' ? parseInt(newValue, 10) : null);
  }

  return (
    <div className='die'>
      {sameSides
        ?
        <label htmlFor={`die-${index}`}>All Dice:</label>
        :
        <label htmlFor={`die-${index}`}>Die {index}:</label>
      }
      <select
        value={selectedSides}
        onChange={handleDiceSidesChange}
        required
      >
        <option value='' disabled>Select How Many Sides</option>
        {[4, 6, 8, 10, 12, 20].map((sides) => {
          return <option key={sides} value={sides}>{sides} </option>
        })}
      </select>
    </div>
  )
};