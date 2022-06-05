import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

import Header from './Header';


// custom main
const Main = styled('main')(({ theme }) => ({
    
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