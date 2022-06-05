// React Js
import React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styled
const BasicContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "@media (min-width: 1200px)": {
    padding: "3%",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  margin: "3% 0%",
  textAlign: "justify",
}));

const Item = styled("span")(({ theme }) => ({
  fontWeight: "bold",
}));

// Main component
let FrontendTechnologies = () => {
  const { data: session, status } = useSession();
  return (
    <BasicContainer>
      {status === "loading" ? (
        <Stack>
          <Skeleton
            variant="rectangular"
            style={{
              minWidth: "275px",
              height: "300px",
            }}
          />
        </Stack>
      ) : (
        <React.Fragment>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ marginBotton: "5%" }}
          >
            Tecnologías cliente
          </Typography>
          <Text>
            <Item>Material Design →</Item> Framework de diseño.
          </Text>
          <Text>
            <Item>Material Ui →</Item> Sistema de diseño.
          </Text>
          <Text>
            <Item>Bootstrap →</Item> Framework de diseño.
          </Text>
          <Text>
            <Item>React Js →</Item> Biblioteca para construir interface de
            usuario.
          </Text>
          <Text>
            <Item>Next Js →</Item> El marco de react para la producción.
          </Text>
        </React.Fragment>
      )}
    </BasicContainer>
  );
};

export default FrontendTechnologies;
