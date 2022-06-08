// React Js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styles
import styles from "../../styles/socialComponent/socialLogo.module.css";

// Styled
const Text = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.primary.main,
  fontWeight: "bold",
  opacity: "0",
  "&:hover": {
    opacity: "1",
  },
}));

// Main component
let SocialMediaLogo = () => {
  const { data: session, status } = useSession();
  return (
    <React.Fragment>
      {status === "loading" ? (
        <Stack>
          <Skeleton variant="rectangular" />
        </Stack>
      ) : (
        <Box className={styles.box}>
          <Card
            className={styles.card}
            sx={{
              backgroundColor: "background.default",
            }}
          >
            <a
              href="https://www.instagram.com/developer_luisf3/?hl=es"
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              <CardActionArea className={styles.action}>
                <div className={styles.instagram}>
                  <Text>Instagram</Text>
                </div>
              </CardActionArea>
            </a>
          </Card>
          <Card
            className={styles.card}
            sx={{
              backgroundColor: "background.default",
            }}
          >
            <a
              href="https://www.facebook.com/Developer-LuisF3-231261368847638"
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              <CardActionArea className={styles.action}>
                <div className={styles.facebook}>
                  <Text>Facebook</Text>
                </div>
              </CardActionArea>
            </a>
          </Card>
          <Card
            className={styles.card}
            sx={{
              backgroundColor: "background.default",
            }}
          >
            <a
              href="https://www.youtube.com/channel/UCUe93GaLtWWz_c2vbhlFP9A"
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              <CardActionArea className={styles.action}>
                <div className={styles.youtube}>
                  <Text>Youtube</Text>
                </div>
              </CardActionArea>
            </a>
          </Card>
          <Card
            className={styles.card}
            sx={{
              backgroundColor: "background.default",
            }}
          >
            <a
              href="https://github.com/DeveloperLuisF3"
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              <CardActionArea className={styles.action}>
                <div className={styles.github}>
                  <Text>GitHub</Text>
                </div>
              </CardActionArea>
            </a>
          </Card>
          <Card
            className={styles.card}
            sx={{
              backgroundColor: "background.default",
            }}
          >
            <a
              href="https://www.tiktok.com/@developerluisf3?lang=es"
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              <CardActionArea className={styles.action}>
                <div className={styles.tiktoc}>
                  <Text>Tiktoc</Text>
                </div>
              </CardActionArea>
            </a>
          </Card>
          <Card
            className={styles.card}
            sx={{
              backgroundColor: "background.default",
            }}
          >
            <a
              href="https://www.linkedin.com/in/developer-luisf3-62033b223/"
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              <CardActionArea className={styles.action}>
                <div className={styles.linkedin}>
                  <Text>Linkedin</Text>
                </div>
              </CardActionArea>
            </a>
          </Card>
        </Box>
      )}
    </React.Fragment>
  );
};

export default SocialMediaLogo;
