import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import PageNotFound from './components/page-not-found/PageNotFound';
import Header from './components/Layout/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProtectRounte from './components/Protect_Rounte/ProtectRounte';
import ProdectsCard from './components/prodect-card/ProdectsCard';

function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Header />,
//       errorElement: <PageNotFound />, // Renders when the route doesn't match
    
//         {
//           path: "sign-in", // Relative path, no need for "/"
//           element: <SignIn />,
//         },
//         {
//           path: "sign-up", // Relative path, no need for "/"
//           element: <SignUp />,
//         },
//         {
//           path: "product-details/:product_id",
//           element: <ProductDetails />,
//         },
//       ],
//     },
//     {
//       path: "/ProdectsCard",
//       element: (
//         <ProtectRounte>
//           <ProdectsCard />
//         </ProtectRounte>
//       ),
//     },
//   ]);

//   return (
//     <div className="App">
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </div>
//   );
// }

// export default App;





const router = createBrowserRouter([
  {
    path: "/",
    element:  <ProtectRounte>
    <Header />
  </ProtectRounte>, // Header wraps all child routes
    children: [
      {
        path: "",
        element: (
          <ProtectRounte>
            <ProdectsCard />
          </ProtectRounte>
        ),
      },
      {
        path: "/ProductDetails/:product_id",
        element: <ProductDetails />,
      },
    ],
    errorElement: <PageNotFound />, // Error fallback
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  // {
  //   path: "/ProdectsCard",
  //   element: (
  //     <ProtectRounte>
  //       <ProdectsCard />
  //     </ProtectRounte>
  //   ),
  // },
]);


return (
       <div className="App">
         <Provider store={store}>
           <RouterProvider router={router} />
         </Provider>
       </div>
     );
}
export default App;