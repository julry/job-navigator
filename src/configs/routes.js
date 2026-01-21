import { Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Page3 } from "../pages/Page3";

export const routes = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/page1',
        element: <Page1 />
    },
    {
        path: '/page2',
        element: <Page2 />
    },
    {
        path: '/page3',
        element: <Page3 />
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace />,
    },
]