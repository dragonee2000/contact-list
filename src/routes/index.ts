import { useRoutes } from "react-router-dom";
import config from 'config';

// routes
import ErrorRoutes from './ErrorRoutes';
import MainRoutes from './MainRoutes';

export default function ThemeRoutes() {
    return useRoutes(
        [MainRoutes, ErrorRoutes], config.basename
    )
}