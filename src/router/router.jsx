import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/register";
import SignIn from "../pages/register/SignIn";
import Jobdetails from "../pages/jobDetails/Jobdetails";
import PrivateRout from "./PrivateRout";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found </h2>,
      children: [

        {
          path:'/',
          element:<Home></Home>
        },



        {
          path:'/jobs/:id',
          element:<PrivateRout> <Jobdetails></Jobdetails></PrivateRout>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },

        {

          path:'/jobApply/:id',
          element:<PrivateRout><JobApply></JobApply></PrivateRout>
        },
        {
          path:'myApplicatios',
          element:<PrivateRout> <MyApplications></MyApplications></PrivateRout>

        },
        {
          path:'addJob',
          element:<PrivateRout><AddJob></AddJob></PrivateRout>
        },
        {
          path:'myPostedJobs',
          element:<PrivateRout>  <MyPostedJobs></MyPostedJobs></PrivateRout>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'signin',
          element:<SignIn></SignIn>
        },
      ]
    },
  ]);
  export default router 