// Material Ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// Styled
const CoverpageWrapper = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  minHeight: "100vh",
  margin: "0% 0% 5% 0%",
  padding: "0%",
}));

// Interface
interface Props {
  children: React.ReactNode;
}

// Main component
let CoverPage = ({ children }: Props) => {
  return <CoverpageWrapper>{children}</CoverpageWrapper>;
};

export default CoverPage;
