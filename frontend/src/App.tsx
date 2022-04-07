import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';
import NavBar from './components/ui/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
