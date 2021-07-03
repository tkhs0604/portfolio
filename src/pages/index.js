import React from "react";

import Layout from "../components/common/layout";
import Meta from "../components/common/meta";

import Profile from "../components/profile";
import Icons from "../components/icons";

import Thumbnail from "../images/thumbnail.jpg";

import Accounts from "../constants/accounts";

export default function Index() {
  return (
    <Layout>
      <Meta />
      <Profile thumbnail={Thumbnail} size={160} />
      <Icons links={Accounts} />
    </Layout>
  );
}
