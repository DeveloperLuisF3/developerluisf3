// Next Js
import Head from "next/head";

// Component
import Layout from "../components/layout/layout";
import CoverPage from "../components/coverPage/coverPage";
import CoverPageProfile from "../components/coverPage/coverPageProfile";
import CoverPageTitle from "../components/coverPage/coverPageTitle";
import AppContainer from "../components/appContainer/appContainer";
import ProfilePresentation from "../components/profilePresntation/profilePresentation";
import Skills from "../components/skills/skillsComponent";
import Hobbies from "../components/hobbies/hobbies";

// Main component
let Profile = () => {
  return (
    <Layout>
      <Head>Profile - DeveloperLuisF3</Head>
      <CoverPage>
        <CoverPageProfile>
          <CoverPageTitle />
        </CoverPageProfile>
      </CoverPage>
      <AppContainer>
        <ProfilePresentation />
        <Skills />
        <Hobbies />
      </AppContainer>
    </Layout>
  );
};

export default Profile;
