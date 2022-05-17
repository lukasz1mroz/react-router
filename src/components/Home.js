import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { AuthStatus } from '../utils/auth.js';

export const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Homepage</h1>
      <AuthStatus />
      <nav>
        <ul>
          <li>
            <Link to="/">Return Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard from link</Link>
          </li>
          <li>
            <p onClick={() => navigate('dashboard/1')}>Dashboard with item from useNavigate</p>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
