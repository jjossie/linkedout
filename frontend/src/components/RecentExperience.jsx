import React from 'react';
import RecentExperienceItem from "./RecentExperienceItem";

const RecentExperience = (props) => {
  let itemComponents = [];
  props.experienceItems.map((item, index) => {
    const key = item.name + item.image + index;
    itemComponents.push(
      <RecentExperienceItem
        name={item.name}
        image={item.image}
        key={key}
      />
    );
    return item;
  });
  return (
    <div style={{padding: "4em"}}>
      {itemComponents}
    </div>
  );
};

export default RecentExperience;