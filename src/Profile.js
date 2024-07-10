import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, role, image }) => {
  return (
    <div className="profile">
      <img src={image} alt={`${name}'s profile`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Profile;