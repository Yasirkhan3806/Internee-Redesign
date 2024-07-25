import logo from './logo.svg';
import './Components/App.css';
import Navbar from './Components/Navbar';
import Internshippage from './Components/internship-page';
import Home from './Components/Home';
import CompanyCollaborationpage from './Components/Company-Collaboration-page';
import Contactus from './Components/Contact-us';
import Loginform from './Components/Login-form';
import JobHome from './Components/Job Portal/home';
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
  ]);
  return (
    <div className="App">
    
      <RouterProvider router={router} />
  
    
    </div>
  );
}

export default App;
