import React, { useState, useRef } from 'react';
import './tooltip.css';

interface TooltipProps {
  children: React.ReactNode; // The element to hover over
  content: React.ReactNode; // Content to be displayed in the tooltip
  position?: 'top' | 'bottom' | 'left' | 'right'; // Position of the tooltip
  followMouse?: boolean; // Whether the tooltip follows the mouse or not
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  followMouse = false,
}) => {
  const [visible, setVisible] = useState(false);
  const [tooltipStyles, setTooltipStyles] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setVisible(true);
    if (followMouse && tooltipRef.current) {
      setTooltipStyles({
        left: event.clientX,
        top: event.clientY,
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (followMouse && tooltipRef.current) {
      console.log(event)
      setTooltipStyles({
        left: event.clientX,
        top: event.clientY,
      });
    }
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className={`tooltip-box ${typeof content === 'string' ? '' : 'unstyled'} ${followMouse ? 'follow-mouse' : position}`}
          style={followMouse ? { position: 'absolute', left: tooltipStyles.left, top: tooltipStyles.top + 30, transform: 'translate(-50%)' } : {}}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
