import React from "react";

import ClickableCircularIcon from "./clickable_circular_icon";

import * as styles from "./icons.module.css";

export default function Icons(props) {
  const listItems = props.links.map((link) => (
    <li key={link.name}>
      <ClickableCircularIcon
        href={link.url}
        image={link.image}
        imageSize={48}
        roundedSize={0}
        roundedColor={"transparent"}
      />
    </li>
  ));

  return (
    <section className={styles.icons}>
      <ul>{listItems}</ul>
    </section>
  );
}
