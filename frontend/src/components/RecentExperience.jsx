import React from 'react';
import RecentExperienceItem from "./RecentExperienceItem";

const RecentExperience = (props) => {
  let itemComponents = [];
  props.experienceItems.map(item => {
    itemComponents.push(
      <RecentExperienceItem name={item.name} image={item.image}/>
    );
    return item;
  });
  return (
    <div className="recent-experience">
      {itemComponents}
    </div>
  );
};

export default RecentExperience;