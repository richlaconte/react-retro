import React, { useState } from 'react'
import Alert from '.'

const AlertPreview = () => {
  const [showAlert, setShowAlert] = useState(true)

  const handleClose = () => {
    setShowAlert(false)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      {showAlert && (
        <Alert variant="success" onClose={handleClose} title="Success Alert">
          This is a success alert with a close button.
        </Alert>
      )}

      <Alert variant="primary" title="Primary Alert">
        This is a primary alert without a close button.
      </Alert>

      <Alert variant="secondary" icon={<span>&#9432;</span>}>
        This is a secondary alert with an info icon.
      </Alert>

      <Alert variant="warning" title="Warning Alert" onClose={() => {}}>
        This is a warning alert with a close button.
      </Alert>

      <Alert variant="error" title="Error Alert" onClose={() => {}}>
        This is an error alert with white text.
      </Alert>
    </div>
  )
}

export default AlertPreview