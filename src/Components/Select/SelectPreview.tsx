import { useState } from 'react'
import Select from '.'

const options = [
  { value: 'option1', label: 'Option One' },
  { value: 'option2', label: 'Option Two' },
  { value: 'option3', label: 'Option Three' },
]

const SelectPreview = () => {
  const [selectedOption, setSelectedOption] = useState('');
  
  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <Select
        label="Select an Option"
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e)}
        placeholder="Please select"
        helperText="Choose an option from the dropdown."
      />

      <Select
        label="Select with Error"
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e)}
        placeholder="Please select"
        helperText="This field is required."
        error
      />

      <Select
        label="Disabled Select"
        options={options}
        value=""
        onChange={() => {}}
        placeholder="Cannot select"
        disabled
      />
    </div>
  )
}

export default SelectPreview