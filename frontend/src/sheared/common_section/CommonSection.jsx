import React from "react";
import './commonSection.css';

const CommonSection = ({title}) => {
  return (
    <section className='about-section common__section'>
      <h2 className='section__title'>{title}</h2>
      <p className='text'>
        We are a public school intrested in any student exploring the field of
        sicence, technology, engineering and math.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel a
        corrupti temporibus repellendus facere fugiat? Totam consequuntur rerum
        necessitatibus, eos pariatur corporis voluptates, saepe aliquam maxime
        accusamus nam voluptatum! Nam provident cupiditate rerum nihil..
      </p>
    </section>
  );
};

export default CommonSection;
