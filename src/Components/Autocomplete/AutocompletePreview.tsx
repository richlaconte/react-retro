import React from 'react'
import Autocomplete, { Option } from '.'

const AutocompletePreview = () => {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Apricot', value: 'apricot' },
    { label: 'Banana', value: 'banana' },
    { label: 'Blackberry', value: 'blackberry' },
    { label: 'Blueberry', value: 'blueberry' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Coconut', value: 'coconut' },
    { label: 'Date', value: 'date' },
    { label: 'Fig', value: 'fig' },
    { label: 'Grape', value: 'grape' },
    { label: 'Kiwi', value: 'kiwi' },
    { label: 'Lemon', value: 'lemon' },
    { label: 'Mango', value: 'mango' },
    { label: 'Orange', value: 'orange' },
    { label: 'Papaya', value: 'papaya' },
    { label: 'Peach', value: 'peach' },
    { label: 'Pear', value: 'pear' },
    { label: 'Pineapple', value: 'pineapple' },
    { label: 'Plum', value: 'plum' },
    { label: 'Raspberry', value: 'raspberry' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Watermelon', value: 'watermelon' },
  ];

  const handleSelection = (value: Option | null) => {
    alert(`Selected: ${value?.label}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Autocomplete Example</h2>
      <Autocomplete
        options={options}
        label="Choose a fruit"
        placeholder="Type to search..."
        variant="primary"
        size="medium"
        onChange={handleSelection}
      />
    </div>
  );
}

export default AutocompletePreview