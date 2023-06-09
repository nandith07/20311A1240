import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrainPage from './pages/TrainPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home page</a>
            </li>
            <li>
              <a href="/trainpage">train page</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trainpage" element={<TrainPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
