import React, { useState } from 'react'
import { FaPlay, FaPause, FaInfoCircle, FaExclamationTriangle, FaTrash, FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa'
import Alert from '../../Components/Alert'
import Button from '../../Components/Button'
import Card from '../../Components/Card'
import IconButton from '../../Components/IconButton'
import List from '../../Components/List'
import ListItem from '../../Components/ListItem'
import Modal from '../../Components/Modal'
import Select from '../../Components/Select'
import TextField from '../../Components/TextField'

const All = () => {
  const [count, setCount] = useState(0)

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  

  

  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleClick = (action: string) => {
    alert(`IconButton clicked: ${action}`);
  };

  const handleItemClick = (item: string) => {
    alert(`Clicked on ${item}`);
  };

  

  return (
    <div>
      <div className='example bg-yellow'></div>
      <div className='example bg-yellowAlt'></div>
      <div className='example bg-red'></div>
      <div className='example bg-redAlt'></div>
      <div className='example bg-grey'></div>
      <div className='example bg-beige'></div>
      <div className='example bg-black'></div>
      <div className='example bg-blackAlt'></div>
      <div className='example bg-green'></div>
      <div className='example bg-greenAlt'></div>
      <div className='example bg-blue'></div>
      <div className='example bg-blueAlt'></div>
      
      
      
      
      
    </div>
  )
}

export default All