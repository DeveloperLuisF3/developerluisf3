// React Js
import React from "react";

// Next Js
import Image from "next/image";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Image
import profilePic from "../../public/img/avatar/luisf3.png";

// Styles
import styles from "../../styles/profilePresentation/presentation.module.css";

// Component
import SocialNetwork from "../socialNetwork/socialNetwork";

// Styled
const Title = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

// Constants
let card = (
  <CardActions>
    <CardMedia className={styles.cardMedia}>
      <Image
        src={profilePic}
        alt="Picture of the autor"
        width="100%"
        height="100%"
      />
    </CardMedia>
    <CardContent className={styles.cardContent}>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ fontWeight: "bold" }}
        color="text.primary"
      >
        Hola, <Title>Soy Luis F.</Title>
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        color="text.primary"
        sx={{
          width: "90%",
          margin: "0% auto 5% auto",
          backgroundColor: "primary.main",
          fontStyle: "italic",
          fontWeight: "bold",
          "@media (min-width: 400px)": {
            width: "40%",
          },
          "@media (min-width: 900px)": {
            width: "50%",
          },
        }}
      >
        Freelancer
      </Typography>
      <Divider className={styles.divider} color="primary.main"></Divider>
      <Typography variant="body1">Ciudad de México, Cuauthémoc</Typography>
      <Typography variant="body1">developerluisf3@outlook.com</Typography>
    </CardContent>
    <Typography variant="body1" sx={{ textAlign: "center" }}>
      Mis redes sociales:
    </Typography>
    <SocialNetwork />
  </CardActions>
);

// Main component
let OutlineCard = () => {
  const { data: session, status } = useSession();
  return (
    <Box>
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
        <Card variant="outlined" sx={{ backgroundColor: "background.default" }}>
          {card}
        </Card>
      )}
    </Box>
  );
};

export default OutlineCard;
