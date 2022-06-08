// NextJs
import type { NextPage } from "next";
import Head from "next/head";

// Components
import Layout from "../components/layout/layout";
import CoverPage from "../components/coverPage/coverPage";
import CoverPageSocial from "../components/coverPage/coverPageSocial";
import SocialPresentation from "../components/socialPresentation/socialPresentation";
import AppContainer from "../components/appContainer/appContainer";
import SocialComponent from "../components/socialComponent/socialComponent";

// Main component
const SocialNetworks: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Redes Sociales - DeveloperLuisF3</title>
      </Head>
      <SocialPresentation />
      <AppContainer>
        <SocialComponent />
      </AppContainer>
    </Layout>
  );
};

export default SocialNetworks;
