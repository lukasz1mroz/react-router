import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.js';
import { Dashboard } from './components/Dashboard.js';
import { Login } from './components/Login.js';
import { NotImplemented } from './components/NotImplemented.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path=":itemId" element={<Dashboard />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotImplemented />} />
      </Routes>
    </BrowserRouter>
  );
};

class AppClass extends React.Component {
  render() {
    return <h1>This is React app from class</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
