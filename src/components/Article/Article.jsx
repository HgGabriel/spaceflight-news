import React from "react";
import "./styles.css"

export function Article({ title, provider, description, thumbnail, url }) {
  
    return (
      <article id="article">
        <img src={thumbnail} alt={title} />

        <div className="article-infos">
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          <h3>{provider}</h3>

          <p>{description}</p>
        </div>

      </article>
    )
  

}

