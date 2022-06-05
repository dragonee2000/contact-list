import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

import Header from './Header';

// custom main
const Main = styled('main')(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#ffffb5",
    background: "linear-gradient(315deg, #ffffb5, #247ba0)",
    animation: `$gradient 10s ease infinite`,
    backgroundSize: "100% 100%",
    "@keyframes gradient": {
      "0%": {
        backgroundPosition: "0% 50%",
      },
      "50%": {
        backgorundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0% 50%",
      },
    },
}))

const MainLayout = () => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />


            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={5}
                sx={{
                    bgcolor: theme.palette.background.default
                }}
            >   
                <Toolbar>
                    <Header />
                </Toolbar>
            </AppBar>

            {/* main content */}
            <Main theme={theme}>
                <Outlet />
            </Main>
        </Box>
    )
}

export default MainLayout;