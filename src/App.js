
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/Header/Header';
import Product from './Components/Products/Product';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './Components/errorpage/Errorpage';



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: < Header/>,errorElement:<Errorpage
      />
    },
    
    {
      path:"/Signin",element: <Signin/>
    },{
      path:"/Signup",
      element: <Signup/>
    }
  ])
  return (
    <div >
      {/* < Header/> */}
  {/* < Product/>
  <Signin/>
  <Signup/> */}
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
