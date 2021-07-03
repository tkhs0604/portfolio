import React from "react";

import CircularIcon from "./circular_icon";

export default function ClickableCircularIcon(props) {
  const { href, image, imageSize, roundedSize, roundedColor } = props;
  return (
    <a href={href} target="_blank">
      <CircularIcon
        image={image}
        imageSize={imageSize}
        roundedSize={roundedSize}
        roundedColor={roundedColor}
      />
    </a>
  );
}
