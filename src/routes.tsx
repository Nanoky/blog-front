import Page from "components/layouts/Page";
import HomePage from "pages/HomePage";
import WritePage from "pages/WritePage";
import React from "react";

export const ROUTE_HOME = '/';
export const ROUTE_WRITE = '/write';

const routes = [
    {
        element: <Page />,
        routes: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: '/write',
                element: <WritePage />
            }
        ]
    },
];

export default routes;