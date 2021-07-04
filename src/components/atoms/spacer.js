import React from "react";

export default function Spacer({ width, height }) {
  return (
    <div
      style={{
        minWidth: width,
        minHeight: height,
      }}
    />
  );
}

Spacer.defaultProps = {
  width: "auto",
  height: "auto",
};
