//U99796912

import React from 'react';
import Gallery from './Gallery';
import './App.css';

const teamMembers = [
  { name: 'Lauren Oxley', role: 'Product Manager', image: 'C:/Users/mikay/OneDrive/Documents/School/2024 Summer/ISM 4940 BAIS Internship/lauren.jpg' },
  { name: 'Caleb Brown', role: 'Software Developer', image: 'C:/Users/mikay/OneDrive/Documents/School/2024 Summer/ISM 4940 BAIS Internship/caleb.jpg' },
  { name: 'Kelsey Hunt', role: 'UI Designer', image: 'C:/Users/mikay/OneDrive/Documents/School/2024 Summer/ISM 4940 BAIS Internship/kelsey.jpg' },
];

const App = () => {
  return (
    <div className="App">
      <Gallery teamMembers={teamMembers} />
    </div>
  );
};

export default App;