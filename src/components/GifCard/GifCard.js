import React from 'react';

import "./GifCard.css";

const GifCard = props => {
  console.log(props)
  if (Array.isArray(props.data.data)) {
    return ( <ul>
      {props.data.data.map(gif => {
        return (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title}></img>
        </li>
        );
      }) }
    </ul>
    );
  }
  return (
    <img src={props.data.data.images.downsized_medium.url} alt={props.data.title}></img>
  );
}

export default GifCard;
