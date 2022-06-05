// MUI imports
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase } from "@mui/material";

// project imports
import LogoSection from "../LogoSection";

// assets imports
import UserIcon from "assets/user-round.svg";

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
            flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          [theme.breakpoints.down("md")]: { width: "auto" },
        }}
      >
        <Box component="span" sx={{ flexGrow: 1 }}>
          <LogoSection />
        </Box>
        
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
        <ButtonBase sx={{ borderRadius: "25px", overflow: "hidden", right: 1 }}>
          <Avatar
            src={UserIcon}
            sx={{
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              "&:hover": {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
          />
        </ButtonBase>
      </Box>
    </>
  );
};

export default Header;
