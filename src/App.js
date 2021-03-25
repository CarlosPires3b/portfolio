import React from 'react';

import styles from '../src/pages/styles/App.module.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div clasName={styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

