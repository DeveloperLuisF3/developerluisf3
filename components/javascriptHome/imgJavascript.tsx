// React Js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styles
import styles from "../../styles/javascriptHome/javascriptHome.module.css";

// Main component
let ImgJavascript = () => {
  const { data: session, status } = useSession();
  return (
    <React.Fragment>
      {status === "loading" ? (
        <Stack>
          <Skeleton
            variant="rectangular"
            style={{
              width: "100%",
              height: "300px",
            }}
          />
        </Stack>
      ) : (
        <Card
          className={styles.JavascriptImgWrapper}
          sx={{ backgroundColor: "background.default" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Javascript Img"
              image="img/imgJavascript/imgJs.png"
              title="Javascript Img"
              className={styles.media}
            ></CardMedia>
          </CardActionArea>
        </Card>
      )}
    </React.Fragment>
  );
};

export default ImgJavascript;
