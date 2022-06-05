// React Js
import React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Main component
let ImgProfile = () => {
  const { data: session, status } = useSession();
  return (
    <React.Fragment>
      {status === "loading" ? (
        <Stack spacing={1}>
          <Skeleton
            variant="rectangular"
            style={{
              width: "100%",
              height: "360px",
            }}
          />
        </Stack>
      ) : (
        <Card sx={{ backgroundColor: "background.default" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Img Presentation"
              image="img/profileImg/luisToons.png"
              title="Img Presentation"
            ></CardMedia>
          </CardActionArea>
        </Card>
      )}
    </React.Fragment>
  );
};

export default ImgProfile;
