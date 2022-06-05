import React, { Suspense } from 'react';
import { styled } from "@mui/system";

// MUI imports
import CircularProgress from '@mui/material/CircularProgress';

const LoaderWrapper = styled("div")({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    width: '100%'
});

const Loader = () => (
    <LoaderWrapper>
        <CircularProgress />
    </LoaderWrapper>
)

const Loadable = (Component: React.FC) => (props: any) => (
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
)

export default Loadable;