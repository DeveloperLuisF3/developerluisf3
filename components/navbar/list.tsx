// React Js
import * as React from "react";

// Next Js
import Link from "next/link";

// Material Ui
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import { green, purple } from "@mui/material/colors";

// Styled
const ListTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontStyle: "italic",
  color: theme.palette.primary.main,
}));

const ListText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
    fontStyle: "italic",
    fontWeight: "bold",
  },
}));

let ListComponent = ({ open }) => {
  return (
    <div>
      <List>
        <ListItemText
          sx={{
            ...(!open && { display: "none" }),
          }}
        >
          <ListTitle>Aplicación</ListTitle>
        </ListItemText>
        <Link href="/">
          <a>
            <ListItemButton
              sx={{
                meinHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: purple[50],
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }} color="primary">
                <ListText>Inicio</ListText>
              </ListItemText>
            </ListItemButton>
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <ListItemButton
              sx={{
                meinHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: purple[50],
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }} color="primary">
                <ListText>Perfil</ListText>
              </ListItemText>
            </ListItemButton>
          </a>
        </Link>
      </List>
      <Divider
        sx={{
          ...(open && { mb: 3 }),
        }}
      />
      <ListItemText
        sx={{
          ...(!open && { display: "none" }),
        }}
      >
        <ListTitle>Proyectos</ListTitle>
      </ListItemText>
      <List>
        <Link href="/leader">
          <a>
            <ListItemButton
              sx={{
                meinHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: purple[50],
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SchoolIcon color="primary" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }} color="primary">
                <ListText>Guías</ListText>
              </ListItemText>
            </ListItemButton>
          </a>
        </Link>
      </List>
      <Divider
        sx={{
          ...(open && { mb: 3 }),
        }}
      />
      <ListItemText
        sx={{
          ...(!open && { display: "none" }),
        }}
      >
        <ListTitle>Contacto</ListTitle>
      </ListItemText>
      <List>
        <Link href="/socialNetworks">
          <a>
            <ListItemButton
              sx={{
                meinHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: purple[50],
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PublicIcon color="primary" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }} color="primary">
                <ListText>Redes Sociales</ListText>
              </ListItemText>
            </ListItemButton>
          </a>
        </Link>
      </List>
      <Divider />
    </div>
  );
};

export default ListComponent;
