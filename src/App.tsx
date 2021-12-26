import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllProducts from './pages/Gen/AllProducts';
import Checkout from './pages/Gen/Checkout';
import Home from './pages/Gen/Home';
import Orders from './pages/Gen/Orders';
import { AddProduct, UpdateProduct } from './pages/dashboard';

const Index = React.lazy(() => import('./pages/Gen/Index'));
const ForgetPassword = React.lazy(() => import('./pages/auth/ForgetPassword'));
const Signin = React.lazy(() => import('./pages/auth/Signin'));
const NotFound = React.lazy(() => import('./pages/Gen/NotFound'));

function App() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<p>loading</p>}>
        <Router>
          <Routes>
            <Route path='/' element={<Index />}>
              <Route path='/' element={<Home />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/orders/:oId' element={<Orders />} />
              <Route path='/admin/dashboard' element={<AddProduct />} />
              <Route path='/all/products' element={<AllProducts />} />
              <Route path='/update/product' element={<UpdateProduct />} />
              <Route path='/cart' element={<UpdateProduct />} />
              <Route path='/new/checout/product' element={<Checkout />} />
            </Route>
            <Route path='/auth/signin' element={<Signin />} />
            <Route path='/auth/forgetpassword' element={<ForgetPassword />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
