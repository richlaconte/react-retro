import React from 'react'
import Button from '.'
import Modal from '../Modal'
import TextField from '../TextField'

const ButtonPreview = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const [containedText, setContainedText] = React.useState('');

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const modalFooter = (
    <>
      <Button variant='secondary' onClick={closeModal}>
        Cancel
      </Button>
      <Button variant='primary' onClick={closeModal}>
        Confirm
      </Button>
    </>
  );

  return (
    <div>
      <Button>
        Primary
      </Button>
      <Button variant='secondary'>
        Secondary
      </Button>
      <Button variant='success'>
        Success
      </Button>
      <Button variant='warning'>
        Warning
      </Button>
      <Button variant='error'>
        Error
      </Button>
      <div>
        <Button onClick={openModal}>
          Open Modal
        </Button>

        <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title" footer={modalFooter}>
          <div>
            <TextField
              label="Contained Input"
              placeholder="Enter text here..."
              value={containedText}
              onChange={(e) => setContainedText(e.target.value)}
              helperText="This is a contained input."
              variant="contained"
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default ButtonPreview