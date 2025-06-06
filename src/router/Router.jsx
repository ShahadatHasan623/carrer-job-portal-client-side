import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/Home/JobDetails/JobDetails";
import PrivateRoute from "../contexts/PrivateRoute";
import JobApply from "../pages/Home/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostsJob from "../pages/MyPostedJob/MyPostsJob";
import VeiwApplications from "../pages/veiwApplication/VeiwApplications";

export const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        children:[
            {
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/jobs/:id',
                loader:({params})=>fetch(`https://carrer-code-server.vercel.app/jobs/${params.id}`),
                Component:JobDetails
            },
            {
                path:'/jobApply/:id',
                loader:({params})=>fetch(`https://carrer-code-server.vercel.app/jobs/${params.id}`),
                element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path:'/myApplication',
                element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path:'/addJob',
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'/MyPostedJob',
                element:<PrivateRoute><MyPostsJob></MyPostsJob></PrivateRoute>
            },
            {
                path:'/applications/:job_id',
                element:<PrivateRoute><VeiwApplications></VeiwApplications></PrivateRoute>,
                loader:({params})=>fetch(`https://carrer-code-server.vercel.app/applications/job/${params.job_id}`)
            }
        ]
    }
])