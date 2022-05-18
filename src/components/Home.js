import React, { useState, useContext } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { AuthStatus } from '../utils/auth.js';
import { useAuth } from '../utils/auth.js';

export const Home = () => {
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  const location = useLocation();
  const authContext = useAuth();
  return (
    <div>
      <h1>Homepage</h1>
      <p>{`Count: ${count}`}</p>
      <button onClick={() => setCount((count) => count + 1)}>Count +</button>
      <button onClick={() => setCount((count) => count - 1)}>Count -</button>
      <p>{`Location: ${location.pathname}`}</p>
      <p>{`AuthContext user: ${authContext.user}`}</p>
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
