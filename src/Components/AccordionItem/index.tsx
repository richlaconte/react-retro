import React, { useState, useRef, useEffect } from 'react';
import '../Accordion/accordion.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export interface AccordionItemProps {
  id: string;
  header: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionItemInternalProps extends AccordionItemProps {
  isExpanded?: boolean;
  onToggle?: (id: string) => void;
}

const AccordionItem: React.FC<AccordionItemInternalProps> = ({
  id,
  header,
  children,
  isExpanded = false,
  onToggle,
  disabled = false,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    isExpanded ? undefined : 0
  );

  useEffect(() => {
    if (isExpanded) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    if (!disabled && onToggle) {
      onToggle(id);
    }
  };

  return (
    <div
      className={`accordion-item ${isExpanded ? 'expanded' : ''} ${
        disabled ? 'disabled' : ''
      }`}
    >
      <button
        className="accordion-header"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
        disabled={disabled}
      >
        <div className="accordion-header-content">{header}</div>
        <div className="accordion-icon">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>
      <div
        id={`accordion-content-${id}`}
        className="accordion-content"
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        style={{ height: height }}
        ref={contentRef}
      >
        <div className="accordion-content-inner">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
