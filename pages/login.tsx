// React Js
import * as React from "react";

// Next Js
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// Next-auth
import { signIn, useSession } from "next-auth/react";

// Material Ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// Styles
import styles from "../styles/login/login.module.css";

// Components
import Layout from "../components/layout/layout";
import Loader from "../components/loader/responsiveProduct";

let LoginApp = () => {
  const theme = useTheme();
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <Layout>
        <Box className={styles.skeletonWrapper}>
          <Loader />
        </Box>
      </Layout>
    );
  }

  if (status === "authenticated") {
    router.push("/");
    return (
      <Layout>
        <Box className={styles.skeletonWrapper}>
          <Loader />
        </Box>
      </Layout>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Layout>
        <Box
          className={styles.container}
          sx={{ backgrounColor: "background.default" }}
        >
          <Head>
            <title>Login - Developer LuisF3</title>
          </Head>
          <Card className={styles.card}>
            <CardMedia className={styles.cardMedia}>
              <Image
                src="/img/profile/luisf3.png"
                alt="My Logo"
                width="150%"
                height="150%"
                className={styles.img}
              />
            </CardMedia>
            <div className={styles.titleWrapper}>
              <Typography variant="h5" className={styles.title}>
                Developer LuisF3
              </Typography>
            </div>
            <CardContent className={styles.content}>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                className={styles.group}
                disableElevation={true}
              >
                <a
                  href={`/api/auth/signin/google`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  <Button className={styles.btnGoogle}>
                    Login with Google
                  </Button>
                </a>
                <a
                  href={`/api/auth/signin/facebook`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("facebook");
                  }}
                >
                  <Button className={styles.btnFacebook}>
                    Login with Facebook
                  </Button>
                </a>
                <a
                  href={`/api/auth/signin/github`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  <Button className={styles.btnGithub}>
                    Login with GitHub
                  </Button>
                </a>
              </ButtonGroup>
            </CardContent>
            <div className={styles.cardFooter}>
              <Typography className={styles.title}>
                Políticas de seguridad
              </Typography>
            </div>
          </Card>
        </Box>
      </Layout>
    );
  }
};

export default LoginApp;
