// React Js
import * as React from "react";

// NextJs
import Head from "next/head";
import Image from "next/image";

// Material Ui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { green, purple } from "@mui/material/colors";

// Styles
import styles from "../../styles/layout/layout.module.css";

// Components
import Drawer from "../navbar/miniDrawer";

// Constants
export const siteTitle = "Developer LuisF3";

// Interface
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      palette: string;
      primary: string;
      secondary: string;
      text: string;
      background: string;
      divider: string;
      typography: string;
      fontFamily: string;
    };
  }
  interface ThemeOptions {
    status?: {
      palette?: string;
      primary?: string;
      secondary?: string;
      text?: string;
      background?: string;
      divider?: string;
      typography?: string;
      fontFamily?: string;
    };
  }
}

interface Props {
  children: React.ReactNode;
}

// Component
let Layout = ({ children }: Props) => {
  let [mode, setMode] = React.useState("light");

  const theme = createTheme({
    palette: {
      ...(mode === "dark" && {
        primary: {
          main: green[300],
        },
        secondary: {
          main: purple[200],
        },
        text: {
          primary: "#fff",
        },
        background: {
          default: "#121212",
        },
        divider: green[300],
      }),
      ...(mode === "light" && {
        primary: {
          main: green[500],
        },
        secondary: {
          main: purple[500],
        },
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
        },
        background: {
          default: "#fff",
        },
        divider: green[500],
      }),
    },
    typography: {
      fontFamily: "Georgia",
    },
  });

  theme.typography.h1 = {
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "1.4rem",
    "@media (min-width:600px)": {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/img/profile/luisf3.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="LuisF3 App my personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Drawer>
        <Container className={styles.container}>{children}</Container>
        <footer className={styles.footer}>
          <a
            href="https://github.com/DeveloperLuisF3/developerluisf3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              variant="body1"
              noWrap
              sx={{ color: theme.palette.primary.main }}
            >
              Powered by DeveloperLuisF3{" "}
            </Typography>
            <span className={styles.logo}>
              <Image
                src="/img/profile/luisf3.png"
                alt="Vercel Logo"
                width={20}
                height={20}
              />
            </span>
          </a>
        </footer>
      </Drawer>
    </ThemeProvider>
  );
};

export default Layout;
