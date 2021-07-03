import React from "react";

import Icon from "./icon";

import * as styles from "./icons.module.css";

export default function Icons(props) {
  const links = props.links;
  const listItems = links.map((link) => (
    <li key={link.name}>
      <Icon link={link} size="48" />
    </li>
  ));

  return (
    <section className={styles.icons}>
      <ul>{listItems}</ul>
    </section>
  );
}
