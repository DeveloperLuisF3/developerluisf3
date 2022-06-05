// React Js
import * as React from "react";

// Material Ui
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

// Styles
import styles from "../../styles/profilePresentation/buttonsGroup.module.css";

const buttons = [
  <a href="#profile" key="profile" className={styles.button}>
    <Button className={styles.buttonProfile}>Perfil</Button>
  </a>,
  <a href="#skills" key="skills" className={styles.button}>
    <Button className={styles.buttonSkills}>Habilidades</Button>
  </a>,
  <a href="#hobbies" key="hobbies" className={styles.button}>
    <Button className={styles.buttonHobbies}>Pasatiempo</Button>
  </a>,
];

// Main component
let ButtonsGroup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        className={styles.buttonsGroup}
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export default ButtonsGroup;
