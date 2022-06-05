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
  padding: 0,
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

let BasicTechnologies = () => {
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
            Tecnologías básicas
          </Typography>
          <Text>
            <Item>HTML5 →</Item> Estructura del proyecto.
          </Text>
          <Text>
            <Item>CSS3 →</Item> Diseño del proyecto.
          </Text>
          <Text>
            <Item>Javascript →</Item> Lenguaje de programación.
          </Text>
          <Text>
            <Item>Git →</Item> Sistema de control de versiones.
          </Text>
          <Text>
            <Item>GitHub →</Item> Plataforma de desarrollo.
          </Text>
          <Text>
            <Item>TypeScript →</Item> Lenguaje de programación fuertemente
            tipado que se basa en JavaScript.
          </Text>
        </React.Fragment>
      )}
    </BasicContainer>
  );
};

export default BasicTechnologies;
