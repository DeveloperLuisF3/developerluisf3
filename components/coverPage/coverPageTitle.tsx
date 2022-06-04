// Material Ui
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// Styled
const CoverText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  textShadow: "3px 3px 3px #333",
}));

// Main component
let CoverPageTitle = () => {
  return <CoverText>LuisF3 App</CoverText>;
};

export default CoverPageTitle;
