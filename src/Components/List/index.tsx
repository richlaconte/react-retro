import React from 'react';
import './list.css';

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <div className="list">{children}</div>;
};

export default List;
