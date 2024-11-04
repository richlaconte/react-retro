import React from 'react';
import AvatarGroup from '../AvatarGroup';
import Avatar from '../Avatar';

const AvatarGroupPreview: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>AvatarGroup Component Preview</h2>
      
      <h3>Basic Usage</h3>
      <AvatarGroup>
        <Avatar name="Alice Test" size='small' />
        <Avatar name="Bob Test" size='small' />
        <Avatar name="Charlie Test" size='small' />
      </AvatarGroup>

      <h3>AvatarGroup with Max Prop (max=2)</h3>
      <AvatarGroup max={2}>
        <Avatar name="Alice" size='small' />
        <Avatar name="Bob" size='small' />
        <Avatar name="Charlie" size='small' />
        <Avatar name="David" size='small' />
      </AvatarGroup>

      <h3>Large Size AvatarGroup</h3>
      <AvatarGroup size="large">
        <Avatar name="Alice" />
        <Avatar name="Bob" />
        <Avatar name="Charlie" />
      </AvatarGroup>

      <h3>AvatarGroup Without Overlap</h3>
      <AvatarGroup overlap={false}>
        <Avatar name="Alice" />
        <Avatar name="Bob" />
        <Avatar name="Charlie" />
      </AvatarGroup>
    </div>
  );
};

export default AvatarGroupPreview;
