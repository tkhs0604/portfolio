import React from "react";

export default function Spacer({ width, height }) {
  return (
    <div
      style={{
        width: width,
        minWidth: width,
        height: height,
        minHeight: height,
      }}
    />
  );
}

Spacer.defaultProps = {
  width: "auto",
  height: "auto",
};
