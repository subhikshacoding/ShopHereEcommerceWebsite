
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Routes,Route, BrowserRouter,} from 'react-router-dom';
import Product from './pages/product';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/cart';
import Shop from './pages/shop';
import Footer from './components/footer/footer';
import { Link } from 'react-router-dom'
import MenCollection from './components/mencollection/menscollection';
import Womencollection from './components/womencollection/Womencollection';
import Kidcollection from './components/kidcollection/Kidcollection';
import Productdisplay from './components/productdisplay/Productdisplay';
import Addtocart from './components/addtocart';
import { CartProvider } from './components/cartcontext';
 
function App() {        

  return (
    <div >
      <CartProvider>
      <Navbar />
   <Routes>
        <Route path='/' element={<Shop />} />
         <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
      </Route>
            <Route path='/cart' element={<Cart />}></Route>
             <Route path='/login' element={<Loginsignup />} />
             <Route path="/mens" element={ <MenCollection />} />
          <Route path="/womens" element={ <Womencollection  />} />
          <Route path="/kids" element={ <Kidcollection />} />

         
    </Routes >
    <Footer />
    </CartProvider>
       


    </div>
  );
}

export default App;