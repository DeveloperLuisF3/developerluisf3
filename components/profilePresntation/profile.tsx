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
const ProfileContainer = styled(Box)(({ theme }) => ({
  margin: "5% 0% 0% 0%",
  textAlign: "justify",
}));

const Title = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const Text = styled(Typography)(({ theme }) => ({
  margin: "2% 0%",
}));

// Main component
let Profile = () => {
  const { data: session, status } = useSession();
  return (
    <ProfileContainer>
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
            color="text.primary"
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            Perfil: <Title>Autodidacta</Title>
          </Typography>
          <Text variant="body1">
            Consiste en aprender mediante la búsqueda individual de la
            información y la realización también individual de prácticas o
            experimentos. A una persona que aprende por sí solo se le llama
            autodidacta.
          </Text>
          <Text variant="body1">
            El autoaprendizaje es algo que el ser humano, los mamíferos y otros
            animales poseen en sí mismos y se pone en evidencia cuando juegan.
            Jugar, aunque a veces no se tiene presente, tiene la función
            principal de aprender nuevas habilidades o mejorar las que ya se
            poseen. Muchas veces, el autoaprendizaje comienza jugando, y pasado
            un tiempo se descubre que se ha aprendido mucho de este modo y que
            no solo sirve para pasárselo bien.
          </Text>
          <Text variant="body1">
            Entonces a manera de síntesis, podemos afirmar que la autonomía en
            el aprendizaje es la facultad que tiene una persona para dirigir,
            controlar, regular y evaluar su forma de aprender de forma
            consciente e intencionada, haciendo uso de estrategias de
            aprendizaje para lograr el objetivo o meta deseados.
          </Text>
          <Text variant="body1">
            Esta autonomía debe de ser el fin último de la educación, que se
            expresa en cómo aprender a aprender.
          </Text>
        </React.Fragment>
      )}
    </ProfileContainer>
  );
};

export default Profile;
