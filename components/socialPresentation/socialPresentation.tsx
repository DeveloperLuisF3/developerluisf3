// React Js
import * as React from "react";

// Next Js
import Image from "next/image";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Image
import profilePic from "../../public/img/coverPage/socialNetwork1.png";

// Styled
const SocialImg = styled("div")(({ theme }) => ({
  width: "80%",
  height: "100vh",
  margin: "0% auto",
  borderRadius: "3%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// Main component
let SocialPresentation = () => {
  const { data: session, status } = useSession();
  return (
    <React.Fragment>
      {status === "loading" ? (
        <Stack>
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: "350px", margin: "0% 0% 5% 0%" }}
          />
        </Stack>
      ) : (
        <SocialImg>
          <Image
            src={profilePic}
            alt="Picture of the author"
            style={{ borderRadius: "1%" }}
          />
        </SocialImg>
      )}
    </React.Fragment>
  );
};

export default SocialPresentation;
