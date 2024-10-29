import React from 'react'
import { FaBell, FaEnvelope } from 'react-icons/fa';
import Badge from '.';

const BadgePreview = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Badge Examples</h2>
      <Badge content={5}>
        <FaBell size={32} />
      </Badge>
      <Badge content={120} max={99} variant="error">
        <FaEnvelope size={32} />
      </Badge>
      <Badge content="New" variant="success" />
    </div>
  );
}

export default BadgePreview