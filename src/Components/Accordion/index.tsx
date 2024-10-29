import React, { useState } from 'react';
import { AccordionItemInternalProps, AccordionItemProps } from '../AccordionItem';
import './accordion.css';

interface AccordionProps {
  children:
    | React.ReactElement<AccordionItemProps | AccordionItemInternalProps>
    | React.ReactElement<AccordionItemProps | AccordionItemInternalProps>[];
  multiple?: boolean;
  defaultExpandedItems?: string[];
  style?: React.CSSProperties;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  multiple = false,
  defaultExpandedItems = [],
  style
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpandedItems);

  const handleToggle = (id: string) => {
    if (multiple) {
      setExpandedItems((prevExpanded) =>
        prevExpanded.includes(id)
          ? prevExpanded.filter((itemId) => itemId !== id)
          : [...prevExpanded, id]
      );
    } else {
      setExpandedItems((prevExpanded) =>
        prevExpanded.includes(id) ? [] : [id]
      );
    }
  };

  return (
    <div className="accordion" style={{ ...style }}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        const itemId = child.props.id;
        return React.cloneElement(child, {
          isExpanded: expandedItems.includes(itemId),
          onToggle: handleToggle,
        });
      })}
    </div>
  );
};

export default Accordion;
