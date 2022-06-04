// React js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// material ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styles
import styles from "../../styles/javascriptHome/javascriptHome.module.css";

// Components
import ImgJavascript from "./imgJavascript";
import JsFullStack from "./jsFullStack";
import JsDeveloper from "./jsDeveloper";

// Styled
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.h2,
  marginBottom: 3,
  padding: theme.spacing(1),
}));

// Main component
let JsWrapper = () => {
  const { data: session, status } = useSession();
  return (
    <Box className={styles.boxJs}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {status === "loading" ? (
            <Stack>
              <Skeleton variant="text" />
            </Stack>
          ) : (
            <Item elevation={0}>JS WEB DEVELOPMENT</Item>
          )}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={2} sx={{ backgroundColor: "background.default" }}>
            <ImgJavascript />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={2} sx={{ backgroundColor: "background.default" }}>
            <JsFullStack />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={2} sx={{ backgroundColor: "background.default" }}>
            <JsDeveloper />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JsWrapper;
