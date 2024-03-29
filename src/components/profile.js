import React from "react";

import Spacer from "./atoms/spacer";
import CircularIcon from "./atoms/circular_icon";

import * as styles from "./profile.module.css";

export default function Profile(props) {
  return (
    <section>
      <div className={styles.thumbnail}>
        <CircularIcon
          image={props.thumbnail}
          imageSize={props.size}
          roundedSize={8}
          roundedColor={"#DDD"}
        />
      </div>
      <Spacer height={40} />
      <h1 className={styles.name}>kenken🐶</h1>
      <Spacer height={20} />
      <p className={styles.description}>
        I am kenken, an Android app engineer currently working at Merpay, Inc.
        <br />
        And I major in graphic, web, UI and UX design at Digital Hollywood
        school.
        <br />
        <br />
        Please contact me via{" "}
        <a
          href="https://twitter.com/messages/compose?recipient_id=1011613706449375232"
          target="_blank"
          rel="noreferrer"
        >
          Twitter Direct Message
        </a>{" "}
        if there is anything you need.
      </p>
    </section>
  );
}
