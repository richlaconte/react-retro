import { FaBell, FaEnvelope } from 'react-icons/fa';
import Badge from '.';
import Button from '../Button';

const BadgePreview = () => {
  return (
    <div style={{ padding: '20px', }}>
      <h2>Badge Examples</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Badge content={5}>
          <FaBell size={32} />
        </Badge>
        <Badge content={120} max={99} variant="error">
          <FaEnvelope size={32} />
        </Badge>
        <Badge content="New" variant="success">
          <FaBell size={32} />
        </Badge>
        <Badge content={5}>
          <Button>Test</Button>
        </Badge>
      </div>
    </div>
  );
}

export default BadgePreview