import { FaUser } from 'react-icons/fa';
import Avatar from '.';

const AvatarPreview = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <h2>Avatar Component Examples</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Avatar src="https://via.placeholder.com/100" alt="User Avatar" size="large" />
        <Avatar initials="JD" size="medium" backgroundColor="#FFD966" textColor="#333333" />
        <Avatar size="medium" />
        <Avatar icon={<FaUser />} size="small" backgroundColor="#98D19F" textColor="#FFFFFF" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Avatar src="https://via.placeholder.com/100" alt="User Avatar" size="large" square />
        <Avatar initials="JD" size="medium" backgroundColor="#FFD966" textColor="#333333" square />
        <Avatar size="medium" square />
        <Avatar icon={<FaUser />} size="small" backgroundColor="#98D19F" textColor="#FFFFFF" square />
      </div>
    </div>
  );
}

export default AvatarPreview