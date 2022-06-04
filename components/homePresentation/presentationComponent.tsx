// React Js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Next Js
import Image from "next/image";

// Material Ui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Image
import profilePic from "../../public/img/avatar/luisf3.png";

// Styles
import styles from "../../styles/homePresentation/presentationComponent.module.css";

// Component
import SocialNetwork from "../socialNetwork/socialNetwork";

// Main component
let PresentationComponent = () => {
  const { data: session, status } = useSession();
  return (
    <React.Fragment>
      {status === "loading" ? (
        <Stack>
          <Skeleton
            variant="rectangular"
            style={{
              width: "100%",
              height: "360px",
            }}
          />
        </Stack>
      ) : (
        <Card
          sx={{ backgroundColor: "background.default" }}
          className={styles.card}
        >
          <CardActions>
            <CardMedia className={styles.cardMedia}>
              <Image
                src={profilePic}
                alt="Picture of the autor"
                width="150%"
                height="150%"
              />
            </CardMedia>
            <CardContent className={styles.cardContent}>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                className={styles.title}
              >
                Developer LuisF3
              </Typography>
              <Typography variant="body1" component="p">
                Ciudad de México, Cuauhtémoc
              </Typography>
              <Typography variant="body1" component="p">
                developerluisf3@outlook.com
              </Typography>
            </CardContent>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Mis redes sociales:
            </Typography>
            <SocialNetwork />
          </CardActions>
        </Card>
      )}
    </React.Fragment>
  );
};

export default PresentationComponent;
