//React Js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// material ui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styles
import styles from "../../styles/javascriptHome/javascriptHome.module.css";

// Constants
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h3" component="div" className={styles.title}>
        FULL{bull}STACK{bull}JS{bull}DEVELOPER
      </Typography>
      <Typography variant="body2" className={styles.text1}>
        Un desarrollador de JavaScript de pila completa es una persona que puede
        desarrollar software de cliente y servidor.
      </Typography>
      <Typography variant="body2" className={styles.text1}>
        Además de dominar HTML y CSS, también sabe cómo:
      </Typography>
      <List className={styles.list}>
        <ul>
          <li>
            <Typography variant="body2" className={styles.text1}>
              Programar un navegador (como usar JavaScript, React, Angular o
              Vue).
            </Typography>
          </li>
          <li>
            <Typography variant="body2" className={styles.text1}>
              Programar un servidor (como usar Node.js).
            </Typography>
          </li>
          <li className={styles.li}>
            <Typography variant="body2" className={styles.text1}>
              Programar una base de datos (como usar MongoDB).
            </Typography>
          </li>
        </ul>
      </List>
    </CardContent>
  </React.Fragment>
);

// Main component
let OutlineCard = () => {
  const { data: session, status } = useSession();
  return (
    <Box className={styles.box}>
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
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "background.default",
            "@media (min-width:900px)": {
              height: "400px",
            },
          }}
        >
          {card}
        </Card>
      )}
    </Box>
  );
};

export default OutlineCard;
