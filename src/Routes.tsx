import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound";
import RentalPropertyCard from "./pages/RentalPropertyCard/index";
import D404 from "./pages/404/index";
import About from "./pages/About/index";
 
function ProjectRoutes() {
    let element = useRoutes ([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "rentalpropertycard", 
            element: <RentalPropertyCard />,
        },
        {
            path: "d404",
            element: <D404 />,
        },
        {
            path: "about", 
            element: <About />,
        },
    ]);
 
    return element;
};
 
export default ProjectRoutes;
