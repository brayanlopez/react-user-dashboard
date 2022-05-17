import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import EditIcon from "@mui/icons-material/Edit";

export default function UserCard({ item }) {
  const { name, username, email, phone, website } = item;
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        title={name}
        subheader={username}
        action={
          [
            <IconButton aria-label="settings" key={"options"}>
              <MoreVertIcon />
            </IconButton>,
          ]
          //   [
          //   <IconButton aria-label="settings" key={"edit"}>
          //     <EditIcon />
          //   </IconButton>,
          //   <IconButton aria-label="delete" key={"delete"}>
          //     <DeleteOutlineIcon />
          //   </IconButton>,
          // ]
        }
      ></CardHeader>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <MailOutlineIcon color="primary" />
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneAndroidIcon color="primary" />
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LanguageIcon color="primary" />
          <Typography variant="body2" color="text.secondary">
            <Link
              href={`https:${website}`}
              color="inherit"
              underline="none"
              target="_blank"
              rel="noreferrer"
            >
              {website}
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
