import React from 'react'
import Skeleton from '.'

const SkeletonPreview = () => {
  return (
    <div>
      <div style={{ width: '300px' }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
      <div style={{ width: '100px', height: '100px' }}>
        <Skeleton variant="circular" width={100} height={100} />
      </div>
      <div style={{ width: '200px', height: '150px' }}>
        <Skeleton variant="rectangular" width={200} height={150} animation="none" />
      </div>
      <div
        style={{
          width: '300px',
          padding: '16px',
          border: '2px solid #333333',
          borderRadius: '8px',
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={180} />
        <div style={{ padding: '8px 0' }}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonPreview