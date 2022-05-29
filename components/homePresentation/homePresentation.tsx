// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styles

// Component
import PresentationComponent from "./presentationComponent";
import VideoPresentation from "./videoPresentation";

// Styled
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.h1,
  marginBotton: 3,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

// Main Component
let BasicGrid = () => {
  const { data: session, status } = useSession();
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "0% 0% 5% 0%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {status === "loading" ? (
            <Stack>
              <Skeleton variant="text" />
            </Stack>
          ) : (
            <Item elevation={0}>JS WEB DEVELOPER</Item>
          )}
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <PresentationComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ backgroundColor: "background.default" }}>
            <VideoPresentation />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicGrid;
