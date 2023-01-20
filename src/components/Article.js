import React from "react";

const Article = ({title, date="December 15, 2020" , preview}) => {
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    )
}

export default Article