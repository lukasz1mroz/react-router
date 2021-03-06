import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { NotImplemented } from './components/NotImplemented';
import { AuthProvider, RequireAuth } from './utils/auth';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route
                path=":itemId"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotImplemented />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

class AppClass extends React.Component {
  render() {
    return <h1>This is React app from class</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
