// React Js
import * as React from "react";

// Material Ui
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// Interface
interface Props {
  children: React.ReactNode;
}

// Main component
let FixedContainer = ({ children }: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>{children}</Container>
    </React.Fragment>
  );
};

export default FixedContainer;
