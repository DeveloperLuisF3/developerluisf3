// React Js
import * as React from "react";

// Next-auth
import { useSession } from "next-auth/react";

// Material Ui
import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// Styled
const CoverPageImg = styled("div")(({ theme }) => ({
  minWidth: "100%",
  minHeight: "100vh",
  backgroundImage:
    "-webkit-linear-gradient(rgba(25,25,25,.9), rgba(0,0,0,.1) ), url(/img/coverPage/home.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// Interface
interface Props {
  children: React.ReactNode;
}

// Main component
let CoverPageHome = ({ children }: Props) => {
  const { data: session, status } = useSession();
  return (
    <React.Fragment>
      {status === "loading" && (
        <Stack spacing={1}>
          <Skeleton
            variant="rectangular"
            style={{
              width: "100%",
              height: "100vh",
            }}
            color="green"
          />
        </Stack>
      )}
      {status === "authenticated" && <CoverPageImg>{children}</CoverPageImg>}
      {status === "unauthenticated" && <CoverPageImg>{children}</CoverPageImg>}
    </React.Fragment>
  );
};

export default CoverPageHome;
