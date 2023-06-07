import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Greeting from './Greeting';
import { fetchGreetingMessage } from '../redux/greeting/greeting';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingMessage());
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
};

export default App;