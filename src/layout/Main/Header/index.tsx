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
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: { width: "auto" },
        }}
      >
          <Box component="span" sx={{ display: { xs: 'none', md: 'block'}, flexGrow: 1}}>
              <LogoSection />
          </Box>
          <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
              <Avatar
                src={UserIcon}
                sx={{
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&:hover': {
                        background: theme.palette.secondary.dark,
                        color: theme.palette.secondary.light,
                    }
                }}
              />
          </ButtonBase>
      </Box>
    </>
  );
};

export default Header;