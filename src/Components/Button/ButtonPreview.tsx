import React from 'react'
import Button from '.'
import Modal from '../Modal'
import TextField from '../TextField'
import Select from '../Select'
import RadioGroup from '../RadioGroup'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ComponentPreview from '../ComponentPreview/ComponentPreview'

const ButtonPreview = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const [containedText, setContainedText] = React.useState('');

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const [variant, setVariant] = React.useState('primary');
  const [value, setValue] = React.useState('Primary');
  const [icon, setIcon] = React.useState('');

  const codeValue = `<Button${variant !== 'primary' ? ` variant="${variant}"` : ''}${icon === 'start' ? ' iconStart={<FaArrowLeft />}': icon === 'end' ? ' iconEnd={<FaArrowRight />}': ''}>\n  ${value}\n</Button>`

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
        <h1>Button</h1>
      </div>
      <div style={{ display: 'flex', marginBottom: '32px' }}>
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
      <ComponentPreview
        importCode={`import { Button } from 'react-retro'`}
        exampleCode={codeValue}
        component={
          <Button style={{ marginBottom: '26px' }} variant={variant as any} iconStart={icon === 'start' ? <FaArrowLeft /> : ''} iconEnd={icon === 'end' ? <FaArrowRight /> : ''}>
            {value}
          </Button>
        }
        controls={
          <>
            <TextField
              label="Button Text"
              placeholder="Enter text here..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant='contained'
            />
            <Select
              label="Variant"
              value={variant}
              onChange={(e) => setVariant(e)}
              options={[
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Success', value: 'success' },
                { label: 'Warning', value: 'warning' },
                { label: 'Error', value: 'error' },
              ]}
            />
            <RadioGroup value={icon} onChange={(value) => setIcon(value)} options={[{ label: 'None', value: '' }, { label: 'Icon Start', value: 'start' }, { label: 'Icon End', value: 'end' }]} name={''} />
          </>
        }
      />
    </div>
  )
}

export default ButtonPreview