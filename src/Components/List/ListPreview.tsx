import React from 'react'
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa'
import List from '.'
import ListItem from '../ListItem'

const ListPreview = () => {
  const handleItemClick = (item: string) => {
    alert(`Clicked on ${item}`)
  }
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Notification Settings</h2>
      <List>
        <ListItem
          icon={<FaCheckCircle />}
          title="Enable Notifications"
          onClick={() => handleItemClick('Enable Notifications')}
          selected
        />
        <ListItem
          icon={<FaTimesCircle />}
          title="Disable Notifications"
          onClick={() => handleItemClick('Disable Notifications')}
        />
        <ListItem
          icon={<FaInfoCircle />}
          title="Notification Preferences"
          subtitle="Customize your notification settings"
          onClick={() => handleItemClick('Notification Preferences')}
        />
        <ListItem
          icon={<FaExclamationCircle />}
          title="Critical Alerts"
          subtitle="Receive important updates"
          onClick={() => handleItemClick('Critical Alerts')}
          disabled
        />
      </List>
    </div>
  )
}

export default ListPreview