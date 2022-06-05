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
import BasicTechnologies from "./basicTechnologies";
import FrontendTechnologies from "./frontendTechnologies";
import BackendTechnologies from "./backendTechnologies";

// Styled
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.h2,
  marginBotton: 3,
  padding: theme.spacing(1),
}));

const SubItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.h3,
  marginBottom: 3,
  padding: theme.spacing(1),
  fontSize: "1.8rem",
  "@media (min-width: 1200px)": {
    textAlign: "left",
  },
}));

// Main component
let SkillsComponent = () => {
  const { data: session, status } = useSession();
  return (
    <Box sx={{ flexGrow: 1, margin: "0% 0% 5% 0%" }}>
      <Grid container spacing={3} id="skills">
        <Grid item xs={12}>
          {status === "loading" ? (
            <Stack>
              <Skeleton variant="text" />
            </Stack>
          ) : (
            <Item elevation={0}>Habilidades</Item>
          )}
        </Grid>
        <Grid item xs={12}>
          {status === "loading" ? (
            <Stack>
              <Skeleton variant="text" />
            </Stack>
          ) : (
            <SubItem elevation={0}>Tecnologías utilizadas: 💻</SubItem>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <BasicTechnologies />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <FrontendTechnologies />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <BackendTechnologies />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsComponent;
