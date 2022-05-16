import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function UserCard() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Pepito Perez"
        subheader="@pepitoperez"
        action={[
          <IconButton aria-label="settings" key={"edit"}>
            <EditIcon />
          </IconButton>,
          <IconButton aria-label="delete" key={"delete"}>
            <DeleteOutlineIcon />
          </IconButton>,
        ]}
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
            balopezg@correo.udistrital.com
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
            balopezg@correo.udistrital.com
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
            balopezg@correo.udistrital.com
          </Typography>
        </Box>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish.
        </Typography> */}
      </CardContent>
    </Card>
  );
}
