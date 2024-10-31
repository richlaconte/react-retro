import React from 'react';
import './stepper.css';

interface StepperProps {
  steps: string[]; // Step labels
  activeStep: number; // Currently active step index
  onStepClick?: (stepIndex: number) => void; // Callback when a step is clicked
  orientation?: 'horizontal' | 'vertical'; // Stepper orientation
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onStepClick,
  orientation = 'horizontal',
}) => {
  return (
    <div className={`stepper-container ${orientation}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`stepper-step ${index <= activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
          onClick={() => onStepClick && onStepClick(index)}
        >
          <div className="step-circle">{index + 1}</div>
          <div className="step-label">{step}</div>
          {index < steps.length - 1 && <div className="step-connector"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
