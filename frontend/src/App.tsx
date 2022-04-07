import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='App'>
      <h1>Workout with Friends</h1>
      <Dashboard />
    </div>
  );
}

export default App;
