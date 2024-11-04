import { useState } from 'react'
import Stepper from '.';

const StepperPreview = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Stepper Component Example</h2>

      {/* Horizontal Stepper Example */}
      <Stepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={handleStepClick}
        orientation="horizontal"
      />

      {/* Vertical Stepper Example */}
      <div style={{ marginTop: '40px' }}>
        <h3>Vertical Stepper Example</h3>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          onStepClick={handleStepClick}
          orientation="vertical"
        />
      </div>
    </div>
  );
}

export default StepperPreview