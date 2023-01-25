import React from 'react';

const RecentExperienceItem = (props) => {
  return (
    <div className="recent-experience-item">
      <img src={props.image} alt={props.name}/>
      <span className="recent-experience-item--text">{props.name}</span>
    </div>
  );
};

export default RecentExperienceItem;