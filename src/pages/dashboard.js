import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArticleIcon from "@mui/icons-material/Article";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PanoramaIcon from "@mui/icons-material/Panorama";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";

import UserCard from "../components/user_card";
import { MenuList } from "../components/menu_list";
import { getUsersAsync, showUsers } from "../redux-slices/users";

const menuItems = [
  { icon: <PersonIcon />, label: "Users" },
  { icon: <ArticleIcon />, label: "Posts" },
  { icon: <PanoramaIcon />, label: "Pictures" },
  { icon: <FormatListBulletedIcon />, label: "Todos" },
];
const secondaryMenuItems = [
  { icon: <SettingsIcon />, label: "Settings", path: "/login" },
  { icon: <ExitToAppIcon />, label: "Exit", path: "/login" },
];

function Dashboard({ name }) {
  let users = useSelector(showUsers);
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Welcome {name}
          </Typography>
          {/* <IconButton sx={{ color: "red" }}>
            <ExitToAppIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: [1],
          }}
        >
          <Button
            variant="text"
            onClick={toggleDrawer}
            sx={{ width: "100%", height: "100%", margin: 0 }}
          >
            <ChevronLeftIcon />
            <Typography variant="body1" color="initial">
              Close Drawer
            </Typography>
          </Button>
        </Toolbar>
        <Divider />
        <MenuList items={menuItems} secondaryItems={secondaryMenuItems} />
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {users.map((item, index) => (
              <UserCard key={`card-${index}`} item={item} />
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default Dashboard;
