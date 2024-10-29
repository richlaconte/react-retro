import React, { useState } from 'react'
import TextField from '.';

const TextFieldPreview = () => {
  const [standardText, setStandardText] = useState('');
  const [containedText, setContainedText] = useState('');
  const [standardMultiText, setStandardMultiText] = useState('');
  const [containedMultiText, setContainedMultiText] = useState('');
  
  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Standard Variant</h2>
      <TextField
        label="Standard Input"
        placeholder="Enter text here..."
        value={standardText}
        onChange={(e) => setStandardText(e.target.value)}
        helperText="This is a standard input."
        variant="standard"
      />
      <TextField
        label="Standard Input Error"
        placeholder="Enter text here..."
        error
        value={standardText}
        onChange={(e) => setStandardText(e.target.value)}
        helperText="This is a standard input with an error."
        variant="standard"
      />

      <TextField
        label="Standard Multiline Input"
        placeholder="Enter multiple lines of text..."
        value={standardMultiText}
        onChange={(e) => setStandardMultiText(e.target.value)}
        multiline
        rows={4}
        helperText="This is a standard multiline input."
        variant="standard"
      />
      <TextField
        label="Standard Multiline Input"
        placeholder="Enter multiple lines of text..."
        value={standardMultiText}
        onChange={(e) => setStandardMultiText(e.target.value)}
        multiline
        error
        rows={4}
        helperText="This is a standard multiline input."
        variant="standard"
      />

      <h2>Contained Variant</h2>
      <TextField
        label="Contained Input"
        placeholder="Enter text here..."
        value={containedText}
        onChange={(e) => setContainedText(e.target.value)}
        helperText="This is a contained input."
        variant="contained"
      />
      <TextField
        label="Contained Input"
        placeholder="Enter text here..."
        error
        value={containedText}
        onChange={(e) => setContainedText(e.target.value)}
        helperText="This is a contained input."
        variant="contained"
      />

      <TextField
        label="Contained Multiline Input"
        placeholder="Enter multiple lines of text..."
        value={containedMultiText}
        onChange={(e) => setContainedMultiText(e.target.value)}
        multiline
        rows={4}
        helperText="This is a contained multiline input."
        variant="contained"
      />
      <TextField
        label="Contained Multiline Input"
        placeholder="Enter multiple lines of text..."
        error
        value={containedMultiText}
        onChange={(e) => setContainedMultiText(e.target.value)}
        multiline
        rows={4}
        helperText="This is a contained multiline input."
        variant="contained"
      />
    </div>
  )
}

export default TextFieldPreview