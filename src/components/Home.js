import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

export const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Homepage</h1>
      <nav>
        <Link to="/">Return Home</Link>
        <Link to="dashboard">Dashboard from link</Link>
        <p onClick={() => navigate('dashboard/1')}>Dashboard with item from useNavigate</p>
      </nav>
      <Outlet />
    </div>
  );
};
