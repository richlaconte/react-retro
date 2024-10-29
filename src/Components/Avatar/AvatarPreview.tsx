import { FaUser } from 'react-icons/fa';
import Avatar from '.';

const AvatarPreview = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
      <h2>Avatar Component Examples</h2>
      {/* Avatar with Image */}
      <Avatar src="https://via.placeholder.com/100" alt="User Avatar" size="large" />

      {/* Avatar with Initials */}
      <Avatar initials="JD" size="medium" backgroundColor="#FFD966" textColor="#333333" />

      {/* Avatar with Icon */}
      <Avatar icon={<FaUser />} size="small" backgroundColor="#98D19F" textColor="#FFFFFF" />

      {/* Avatar with Placeholder */}
      <Avatar size="medium" />
    </div>
  );
}

export default AvatarPreview