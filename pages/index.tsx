// NextJs
import type { NextPage } from "next";
import Head from "next/head";

// Compponents
import Layout, { siteTitle } from "../components/layout/layout";
import CoverPage from "../components/coverPage/coverPage";
import CoverPageHome from "../components/coverPage/coverPageHome";
import CoverTitle from "../components/coverPage/coverPageTitle";
import AppContainer from "../components/appContainer/appContainer";
import HomePresentation from "../components/homePresentation/homePresentation";
import JavascriptHome from "../components/javascriptHome/javascriptHome";

// Main component
const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Inicio - {siteTitle}</title>
      </Head>
      <CoverPage>
        <CoverPageHome>
          <CoverTitle />
        </CoverPageHome>
      </CoverPage>
      <AppContainer>
        <HomePresentation />
        <JavascriptHome />
      </AppContainer>
    </Layout>
  );
};

export default Home;
