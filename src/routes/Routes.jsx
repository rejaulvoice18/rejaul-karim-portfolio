import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ProjectDetails from "../components/ProjectDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/project-details/:details',
                element: <ProjectDetails />
            }
        ]
    }
])