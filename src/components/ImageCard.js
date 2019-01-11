import React from "react";


function ImageCard(props) {
  return (
      <span id={props.id} onClick={() => props.onClick(props.id)} value={props.id}>
        <img src={props.image} width="75" alt="image1"/>
      </span>
  );
}

export default ImageCard;