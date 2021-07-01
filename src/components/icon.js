import React from "react";

import ReactRoundedImage from "react-rounded-image";

export default function Icon(props) {
  return (
    <a href={props.link.url} target="_blank">
      <ReactRoundedImage
        image={props.link.iconPath}
        imageWidth="48"
        imageHeight="48"
        roundedSize="0"
        roundedColor="transparent"
      />
    </a>
  );
}
