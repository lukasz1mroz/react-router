import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NotImplemented = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>NotImplemented works!</h1>
      <Link to="/">Home link</Link>
      <p onClick={() => navigate('/')}>Home useNavigate</p>
    </div>
  );
};
