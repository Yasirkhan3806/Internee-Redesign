import logo from './logo.svg';
import './Components/App.css';
import Navbar from './Components/Navbar';
import Internshippage from './Components/internship-page';
import Home from './Components/Home';
import CompanyCollaborationpage from './Components/Company-Collaboration-page';
import Contactus from './Components/Contact-us';
import Loginform from './Components/Login-form';
import JobHome from './Components/Job Portal/home';
import JobCompany from './Components/Job Portal/Job-Company';
import HiringNow from './Components/Job Portal/Hiring-Now';
import Aboutus from './Components/Job Portal/About-us';
import JobContactus from './Components/Job Portal/Job-Contact-us';
import Applypage from './Components/Apply Page/Apply-page';
import MobileAppapply from './Components/Apply Page/MobileApp-apply';
import Backendapply from './Components/Apply Page/Backend-apply';
import Graphicapply from './Components/Apply Page/graphic-apply';
import ChatbotApply from './Components/Apply Page/ChatbotApply';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





function App() {
  const router = createBrowserRouter([
    {
      path: "/internship-page",
      element:(
      <><Navbar /> 
      <Internshippage /></>
      ),
    },
    {
      path: "/",
      element: (
      <>
      <Home /></>
      ),
    },
    {
      path:"/Company-Collaboration-page",
      element:<><CompanyCollaborationpage/></>
},
{
path:"/Contact-us-page",
element:<><Contactus/></>
},
{
path:"/internee-login",
element:<><Loginform/></>
},
{
path:"/Job-Portal",
element:<><JobHome/></>
},
{
path:"/Job-Companies",
element:<><JobCompany/></>
  },
  {
    path:"/Hiring-Now",
    element:<><HiringNow/></>
        },
    {
      path:"/About-Us",
      element:<><Aboutus/></>
          },
        {
          path: "/Contact-Us",
          element: <><JobContactus/></>,
        },
      {
        path: "/Post-Job",
        element: <><Loginform/></>,
      },
  {
    path: "/Apply-Page",
    element: <><Navbar/>,
    <Internshippage/></>,
  },
      {
        path: "/Mobile-App-Internship",
        element: <><MobileAppapply/></>,
      },
      {
        path: "/Backend-Internship",
        element: <><Backendapply/></>,
      },
      {
        path: "/Graphic-Internship",
        element: <><Graphicapply/></>,
      },
      {
        path: "/Chatbot-Internship",
        element: <><ChatbotApply/></>,
      },
        ]);

  return (
    <div className="App">
    
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
