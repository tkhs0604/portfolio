import React from "react";

import ReactRoundedImage from "react-rounded-image";

export default function CircularIcon(props) {
  const { image, imageSize, roundedSize, roundedColor } = props;
  return (
    <ReactRoundedImage
      image={image}
      imageWidth={imageSize}
      imageHeight={imageSize}
      roundedSize={roundedSize}
      roundedColor={roundedColor}
    />
  );
}
