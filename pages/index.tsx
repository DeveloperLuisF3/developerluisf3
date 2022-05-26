// NextJs
import type { NextPage } from "next";
import Head from "next/head";

// Compponents
import Layout from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home - Developer LuisF3</title>
      </Head>
    </Layout>
  );
};

export default Home;
