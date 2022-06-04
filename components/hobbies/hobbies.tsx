// React Js
import * as React from "react";

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
import Programming from "./programming";

// Styled
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.h2,
  marginBotton: 3,
  padding: theme.spacing(1),
}));

// Main component
let Hobbies = () => {
  const { data: session, status } = useSession();
  return (
    <Box sx={{ flexGrow: 1, margin: "0% 0% 5% 0%" }}>
      <Grid container spacing={3} id="hobbies">
        <Grid item xs={12}>
          {status === "loading" ? (
            <Stack>
              <Skeleton variant="text" />
            </Stack>
          ) : (
            <Item elevation={0}>Pasatiempo</Item>
          )}
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <Programming />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hobbies;
