// React Js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// material ui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
        FULL{bull}STACK{bull}JS{bull}DEVELOPMENT
      </Typography>
      <Typography variant="body2" className={styles.text1}>
        JavaScript ha existido por más de 20 años. Es el lenguaje de
        programación dominante en el desarrollo web.
      </Typography>
      <Typography variant="body2" className={styles.text1}>
        Al principio, JavaScript era un idioma para el cliente web (navegador).
        Luego vino la capacidad de usar JavaScript en el servidor web (con
        Node.js).
      </Typography>
      <Typography variant="body2" className={styles.text1}>
        Hoy en día, la palabra de moda más popular es Full Stack JavaScript.
      </Typography>
      <Typography variant="body2" className={styles.text1}>
        La idea de Full Stack JavaScript es que todo el software en una
        aplicación web, tanto del lado del cliente como del servidor, debe
        escribirse solo con JavaScript.
      </Typography>
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
              minHeight: "400px",
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
