import * as React from "react";
import Avatar from "@mui/material/Avatar";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(first_name: string, last_name: string) {
  return {
    sx: {
      bgcolor: stringToColor(first_name),
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