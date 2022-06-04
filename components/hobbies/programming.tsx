// React Js
import React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styled
const CodeWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundImage:
    "-webkit-linear-gradient(rgba(25,25,25,.9), rgba(0,0,0,.1) ), url(/img/home/home.png)",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Text = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

// Main component
let Programming = () => {
  const { data: session, status } = useSession();
  return (
    <React.Fragment>
      {status === "loading" ? (
        <Stack>
          <Skeleton variant="text" />
        </Stack>
      ) : (
        <a href="#">
          <CardActionArea
            sx={{
              border: "1px solid #81c784",
              width: "400px",
              height: "200px",
              margin: "0% auto",
              borderRadius: "1%",
            }}
          >
            <CodeWrapper>
              <Text>Programar</Text>
            </CodeWrapper>
          </CardActionArea>
        </a>
      )}
    </React.Fragment>
  );
};

export default Programming;
