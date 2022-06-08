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
  minWidth: "80%",
  minHeight: "200px",
  backgroundImage:
    "-webkit-linear-gradient(rgba(25,25,25,.9), rgba(0,0,0,.1) ), url(/img/coverPage/socialNetwork1.png)",
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
let CoverPageSocial = () => {
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
      {status === "authenticated" && <CoverPageImg></CoverPageImg>}
      {status === "unauthenticated" && <CoverPageImg></CoverPageImg>}
    </React.Fragment>
  );
};

export default CoverPageSocial;
