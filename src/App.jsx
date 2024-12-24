import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          {/* Public Route */}
          <Route path="/login" exact>
            <LoginForm />
          </Route>

          {/* Private Routes */}
          <PrivateRoute path="/friends/add" exact>
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute path="/friends" exact>
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute path="/" exact>
            <FriendsList />
          </PrivateRoute>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
