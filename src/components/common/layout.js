import React from "react";

import Footer from "./footer";

import "modern-css-reset";
import * as styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
