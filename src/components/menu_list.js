import React from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export const MenuList = ({ items = [], secondaryItems = [] }) => (
  <List
    component="nav"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    }}
  >
    <div>
      {items.map((item, key) => (
        <ListItemButton key={`li-${key}`}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
      <Divider sx={{ my: 1 }} />
    </div>
    {secondaryItems.length > 0 ? (
      <div>
        {secondaryItems.map((item, key) => (
          <Link key={`si-${key}`} to={item.path} className="link-undecorated">
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
        ))}
      </div>
    ) : null}
  </List>
);
