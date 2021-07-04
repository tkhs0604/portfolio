import React from "react";

import ClickableCircularIcon from "./atoms/clickable_circular_icon";

import * as styles from "./icons.module.css";

export default function Icons(props) {
  const { links } = props;
  const lists = links.map((link) => (
    <li key={link.name}>
      <ClickableCircularIcon
        href={link.url}
        ariaLabel={link.name}
        image={link.image}
        imageSize={48}
        roundedSize={0}
        roundedColor={"transparent"}
      />
    </li>
  ));

  return (
    <section>
      <ul className={styles.icons}>{lists}</ul>
    </section>
  );
}
