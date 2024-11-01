import { useState } from 'react'
import RadioGroup from '.';

const RadioGroupPreview = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3', disabled: true },
    { value: 'option4', label: 'Option 4' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>RadioGroup Component Example</h2>

      {/* Radio Group Example */}
      <RadioGroup
        options={radioOptions}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
        name="exampleRadioGroup"
        size="medium"
      />
    </div>
  );
}

export default RadioGroupPreview