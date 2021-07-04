import React from "react";

import Spacer from "./atoms/spacer"
import CircularIcon from "./atoms/circular_icon";

import * as styles from "./profile.module.css";

export default function Profile(props) {
  return (
    <section className={styles.profile}>
      <div>
        <CircularIcon
          image={props.thumbnail}
          imageSize={props.size}
          roundedSize={8}
          roundedColor={"#DDD"}
        />
      </div>
      <div>
        <h1 className={styles.name}>kenken🐶</h1>
        <Spacer height={20} />
        <p className={styles.description}>
          I am kenken, an Android engineer working at Merpay Inc.
          <br />
          And I am studying Web/UI/UX design at Digital Hollywood school.
          <br />
          <br />
          Please contact me via{" "}
          <a
            href="https://twitter.com/messages/compose?recipient_id=1011613706449375232"
            target="_blank"
            rel="noreferrer"
          >
            Twitter DM
          </a>{" "}
          if there is anything you need.
        </p>
      </div>
    </section>
  );
}
