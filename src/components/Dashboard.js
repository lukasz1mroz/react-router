import React from 'react';
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  let { itemId } = useParams();
  return (
    <div>
      <h1>{itemId ? `Dashboard with itemId ${itemId} works!` : 'Dashboard works!'}</h1>
    </div>
  );
};
