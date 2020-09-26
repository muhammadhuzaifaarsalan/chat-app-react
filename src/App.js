import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage';
import LoginPage from './containers/loginPage';
import RegisterPage from './containers/RegisterPage';
import PrivateRoute from './components/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isloggedInUser } from './actions';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()


  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isloggedInUser())
    }
  }, []);


  return (
    <div className="App">
      <Router>
        {/* only logged in user can access this home route */}
        <PrivateRoute path="/" exact component={HomePage} />


        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;