import React from 'react';

import "./GifCard.css";

const GifCard = props => {
  console.log(props)
  if (Array.isArray(props.data.data)) {
    return (
    <div className="gifs">
      <ul>
        {props.data.data.map(gif => {
          return (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title}></img>
          </li>
          );
        }) }
      </ul>
    </div>
    );
  }
  return (
    <div className="gifs">
      <img src={props.data.data.images.downsized_medium.url} alt={props.data.title}></img>
    </div>
  );
}

export default GifCard;
