import { FaUser, FaCheck } from 'react-icons/fa';
import Chip from '.';

const ChipPreview = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Chip Examples</h2>
      <Chip
        label="Basic Chip"
        variant="primary"
      />
      <Chip
        label="Chip with Icon"
        variant="success"
        icon={<FaUser />}
      />
      <Chip
        label="Deletable Chip"
        variant="warning"
        onDelete={() => alert('Chip deleted')}
      />
      <Chip
        label="Disabled Chip"
        variant="secondary"
        disabled
      />
      <Chip
        label="Large Chip"
        variant="error"
        size="large"
        icon={<FaCheck />}
        onDelete={() => alert('Chip deleted')}
      />
    </div>
  );
}

export default ChipPreview