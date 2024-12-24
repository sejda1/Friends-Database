import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children, ...rest }) {
  const { authInfo } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authInfo.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
