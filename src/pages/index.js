import React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile";
import Icons from "../components/icons";

import Thumbnail from "../images/thumbnail.jpg";
import Links from "../links";

export default function Index() {
  return (
    <Layout>
      <Profile thumbnail={Thumbnail} />
      <Icons links={Links} />
    </Layout>
  );
}
