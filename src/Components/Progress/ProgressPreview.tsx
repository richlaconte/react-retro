import { useEffect, useState } from 'react'
import Progress from '.'

const ProgressPreview = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 0;
        }
        return oldProgress + 10;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div>
        <div style={{ padding: '20px' }}>
          <h2>Circular Indeterminate Progress</h2>
          <Progress variant="circular" color="primary" />
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h2>Circular Determinate Progress</h2>
        <Progress
          variant="circular"
          mode="determinate"
          value={progress}
          showValue
          size="large"
          color="success"
        />
      </div>
      <div style={{ padding: '20px' }}>
        <h2>Linear Indeterminate Progress</h2>
        <Progress variant="linear" color="success" value={75} />
      </div>
      <div style={{ padding: '20px' }}>
        <h2>Linear Determinate Progress</h2>
        <Progress
          variant="linear"
          mode="determinate"
          value={progress}
          showValue
          valuePosition="top"
          label="Loading Data"
          color="warning"
        />
      </div>
    </div>
  )
}

export default ProgressPreview