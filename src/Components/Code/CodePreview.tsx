import React from 'react'
import Code from '.';

const CodePreview = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Code Component Examples</h2>

      {/* Inline Code Example */}
      <p>
        You can use the <Code withCopy>React.useState</Code> hook to manage state in functional components.
      </p>

      {/* Block Code Example with Copy */}
      <div style={{ marginTop: '20px' }}>
        <h3>Multiline Code Snippet</h3>
        <Code variant="block" withCopy>
          {`function greet() {
  console.log('Hello, World!');
}`}
        </Code>
      </div>
    </div>
  );
}

export default CodePreview