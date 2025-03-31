import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";

import DHome from "pages/DHome";

import DRentalPropertyCard from "pages/DRentalPropertyCard";
import D404 from "pages/D404";
import DAbout from "pages/DAbout";



const ProjectRoutes = () => {
    let element = useRoutes ([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "dhome",
            element: <DHome />,
        },
        {
            path: "drentalpropertycard", 
            element: <DRentalPropertyCard />,
        },
        {
            path: "d404",
            element: <D404 />,
        },
        {
            path: "dabout", 
            element: <DAbout />,
        },
    ]);

    return element;
};

export default ProjectRoutes; 
