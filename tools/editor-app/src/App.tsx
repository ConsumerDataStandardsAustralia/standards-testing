import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ImportJSONButton} from './components/ImportJSONButton';
import { DashboardTemplate } from './components/LandingPage';

function App() {
  return (
    <div>
      <DashboardTemplate/>
      <ImportJSONButton/>
    </div>
  );
}

export default App;
