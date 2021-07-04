import React from "react";

import CircularIcon from "./circular_icon";

export default function ClickableCircularIcon(props) {
  const { href, ariaLabel, image, imageSize, roundedSize, roundedColor } = props;
  return (
    <a href={href} aria-label={ariaLabel} target="_blank" rel="noreferrer">
      <CircularIcon
        image={image}
        imageSize={imageSize}
        roundedSize={roundedSize}
        roundedColor={roundedColor}
      />
    </a>
  );
}
