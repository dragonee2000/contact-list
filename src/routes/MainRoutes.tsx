import { lazy } from 'react';

// project imports
import MainLayout from 'layout/Main';
import Loadable from 'helper/loadable';

// routes
const ContactListPage = Loadable(lazy(() => import('pages/Contact')));
const ActionContactPage = Loadable(lazy(() => import('pages/Action')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <ContactListPage />
        },
        {
            path: '/:action',
            element: <ActionContactPage />
        },
        {
            path: '/:action/:id',
            element: <ActionContactPage />
        }
    ]
}

export default MainRoutes;