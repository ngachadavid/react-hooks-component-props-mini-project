import React from "react";

const About = ({
  image = "https://via.placeholder.com/215", about
}) => {
  return (
    <aside>
      <im src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}

export default About;
