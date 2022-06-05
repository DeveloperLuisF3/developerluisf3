// React Js
import React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Components
import ButtonsGroup from "./buttonsGroup";
import Presentation from "./presentation";
import Img from "./img";
import Profile from "./profile";

// Styled
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.h1,
  marginBotton: 3,
  padding: theme.spacing(1),
}));

// Main component
let BasicGrid = () => {
  const { data: session, status } = useSession();
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "0% 0% 5% 0%",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {status === "loading" ? (
            <Stack>
              <Skeleton variant="text" />
            </Stack>
          ) : (
            <Item elevation={0}>Perfil</Item>
          )}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <ButtonsGroup />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <Presentation />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <Img />
          </Paper>
        </Grid>
        <Grid item xs={12} id="profile">
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <Profile />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicGrid;
