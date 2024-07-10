import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  { name: 'Lauren Oxley', role: 'Frontend Developer', image: 'path/to/alice.jpg' },
  { name: 'Caleb Brown', role: 'Backend Developer', image: 'path/to/bob.jpg' },
  { name: 'Kelsey Hunt', role: 'UX Designer', image: 'path/to/carol.jpg' },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} name={member.name} role={member.role} image={member.image} />
      ))}
    </div>
  );
};

export default Gallery;