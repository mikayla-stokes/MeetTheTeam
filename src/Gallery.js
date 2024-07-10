import React from 'react';
import Profile from './Profile';

// Header component
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

const Gallery = ({ teamMembers }) => {
  return (
    <div>
      <Header title="Meet the Team" />
      <div className="gallery">
        {teamMembers.map((member, index) => (
          <Profile key={index} name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;