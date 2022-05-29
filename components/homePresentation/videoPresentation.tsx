// React Js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styles
import styles from "../../styles/homePresentation/videoPresentation.module.css";

// Main component
let VideoPresentation = () => {
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
        <iframe
          className={styles.vid}
          src="https://www.youtube.com/embed/exlHooJcaMQ"
        ></iframe>
      )}
    </React.Fragment>
  );
};

export default VideoPresentation;
