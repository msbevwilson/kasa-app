import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound";
import DRentalPropertyCard from "./pages/PropertyCard/index";
import D404 from "./pages/404/index";
import About from "./pages/About/index";
 
function ProjectRoutes() {
    let element = useRoutes ([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        // {
        //     path: "drentalpropertycard", 
        //     element: <DRentalPropertyCard />,
        // },
        {
            path: "d404",
            element: <D404 />,
        },
        {
            path: "dabout", 
            element: <About />,
        },
    ]);
 
    return element;
};
 
export default ProjectRoutes;
