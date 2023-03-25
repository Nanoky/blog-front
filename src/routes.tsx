import Page from "components/layouts/Page";
import HomePage from "pages/HomePage";
import WritePage from "pages/WritePage";
import React from "react";


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