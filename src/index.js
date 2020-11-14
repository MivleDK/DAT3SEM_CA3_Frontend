import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const AppWithRouter = () => {
  document.title = "Mick Larsen - CA3"
  return (
    <Router>
      <App />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));


