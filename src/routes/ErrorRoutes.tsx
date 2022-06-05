import { lazy } from 'react';

// project imports
import Loadable from "helper/loadable";
import Minimal from 'layout/Minimal';

// lazy loading
const NotFoundPage = Loadable(lazy(() => import('pages/Error')));

// ==============================|| ERROR ROUTING ||============================== //

const ErrorRoutes = {
    path: '/',
    element: <Minimal />,
    children: [
        {
            path: "*",
            element: <NotFoundPage />
        }
    ]
}

export default ErrorRoutes;