import React from 'react'
import { FaPlay, FaPause, FaInfoCircle, FaExclamationTriangle, FaTrash } from 'react-icons/fa'
import IconButton from '.'

const IconButtonPreview = () => {
  const handleClick = (text: string) => {
    alert(text)
  }

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <IconButton
          variant="primary"
          onClick={() => handleClick('Play')}
          ariaLabel="Play"
        >
          <FaPlay />
        </IconButton>

        <IconButton
          variant="secondary"
          onClick={() => handleClick('Pause')}
          ariaLabel="Pause"
        >
          <FaPause />
        </IconButton>

        <IconButton
          variant="success"
          onClick={() => handleClick('Info')}
          ariaLabel="Info"
        >
          <FaInfoCircle />
        </IconButton>

        <IconButton
          variant="warning"
          onClick={() => handleClick('Warning')}
          ariaLabel="Warning"
        >
          <FaExclamationTriangle />
        </IconButton>

        <IconButton
          variant="error"
          onClick={() => handleClick('Delete')}
          ariaLabel="Delete"
        >
          <FaTrash />
        </IconButton>

        <IconButton
          variant="primary"
          disabled
          ariaLabel="Disabled Button"
        >
          <FaPlay />
        </IconButton>
      </div>
      <div>
        <IconButton
          variant="primary"
          onClick={() => handleClick('Play')}
          ariaLabel="Play"
          square
        >
          <FaPlay />
        </IconButton>

        <IconButton
          variant="secondary"
          onClick={() => handleClick('Pause')}
          ariaLabel="Pause"
          square
        >
          <FaPause />
        </IconButton>

        <IconButton
          variant="success"
          onClick={() => handleClick('Info')}
          ariaLabel="Info"
          square
        >
          <FaInfoCircle />
        </IconButton>

        <IconButton
          variant="warning"
          onClick={() => handleClick('Warning')}
          ariaLabel="Warning"
          square
        >
          <FaExclamationTriangle />
        </IconButton>

        <IconButton
          variant="error"
          onClick={() => handleClick('Delete')}
          ariaLabel="Delete"
          square
        >
          <FaTrash />
        </IconButton>

        <IconButton
          variant="primary"
          disabled
          ariaLabel="Disabled Button"
          square
        >
          <FaPlay />
        </IconButton>
      </div>
    </div>
  )
}

export default IconButtonPreview