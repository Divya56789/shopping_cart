import './App.css';
import { Outlet,  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart'
import { Footer,Navbar, ProductPage } from './components';
import fetchproduct from './api/Api'
import Account from './pages/Account';
import { createRef } from 'react';
import Wishlist from './pages/Wishlist';

const sectionRef1 = createRef();
const sectionRef2 = createRef();
const sectionRef3 = createRef();

const Layout = () => {

  const scrollToSection = (sectionRef) => {
       sectionRef.current.scrollIntoView({behavior : 'smooth'})

  }
  return (
    <div>
      <Navbar scrollToSection={(sectionRef) => scrollToSection(sectionRef)}  sectionRef1={sectionRef1} sectionRef2={sectionRef2} sectionRef3={sectionRef3}/>
      <Outlet />
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <Home sectionRef1={sectionRef1} sectionRef2={sectionRef2} sectionRef3={sectionRef3}/>,
        loader: fetchproduct,
        
      },{
        path:'/cart',
        element: <Cart/>,
      },{
        path: '/wishlist',
        element: <Wishlist/>
      },
      {
        path:'/product/:id',
        element: <ProductPage/>,
      },{
        path:'/login',
        element:<Account/>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
