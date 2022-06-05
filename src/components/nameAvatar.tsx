import * as React from "react";
import Avatar from "@mui/material/Avatar";

function stringAvatar(first_name: string, last_name: string) {
  return {
    sx: {
      backgroundColor: "#e9bcb7",
      backgroundImage: "linear-gradient(315deg, #e9bcb7, #29524a)",
      color: "#FFFFFF",
    },
    children: `${first_name[0]}${last_name[0]}`,
  };
}

interface Name { 
    first_name: string;
    last_name: string;
}

export default function NameAvatar({first_name, last_name}: Name) {
    return (
        <Avatar {...stringAvatar(first_name, last_name)} />
    )
}