import * as React from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

let AuthContext = React.createContext(null);
const useAuth = () => React.useContext(AuthContext);

const mockAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    mockAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signoff(callback) {
    mockAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return mockAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return mockAuthProvider.signoff(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AuthStatus = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You're not logged in!</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export { mockAuthProvider, RequireAuth, AuthProvider, AuthStatus, useAuth };
