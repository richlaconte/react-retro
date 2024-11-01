import React from 'react'
import Modal from '.';
import Button from '../Button';
import TextField from '../TextField';

const ModalPreview = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const [containedText, setContainedText] = React.useState('');

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const modalFooter = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant='secondary' onClick={closeModal}>
        Cancel
      </Button>
      <Button variant='primary' onClick={closeModal}>
        Confirm
      </Button>
    </div>
  );

  return (
    <div>
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

export default ModalPreview