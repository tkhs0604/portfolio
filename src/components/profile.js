import React from "react";

import ReactRoundedImage from "react-rounded-image";

import * as styles from "./profile.module.css";

export default function Profile(props) {
  return (
    <section className={styles.profile}>
      <div className={styles.thumbnail}>
        <ReactRoundedImage
          className={styles.thumbnail}
          image={props.thumbnail}
          imageWidth="160"
          imageHeight="160"
          roundedSize="16"
          roundedColor="#DDD"
        />
      </div>
      <div>
        <h1 className={styles.name}>kenken🐶</h1>
        <p className={styles.description}>
          I am kenken, an Android engineer working at Merpay Inc.
          <br />
          And I am studying Web/UI/UX design at Digital Hollywood.
          <br />
          Please contact me via{" "}
          <a
            href="https://twitter.com/messages/compose?recipient_id=1011613706449375232"
            target="_blank"
          >
            Twitter DM
          </a>{" "}
          if there is anything you need.
        </p>
      </div>
    </section>
  );
}