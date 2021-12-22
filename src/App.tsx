import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddProducts from './pages/Gen/AddProducts';
import AllProducts from './pages/Gen/AllProducts';
import Checkout from './pages/Gen/Checkout';
import Home from './pages/Gen/Home';
import Orders from './pages/Gen/Orders';
import UpdateProducts from './pages/Gen/UpdateProducts';

const Index = React.lazy(() => import('./pages/Gen/Index'));
const ForgetPassword = React.lazy(() => import('./pages/auth/ForgetPassword'));
const Signin = React.lazy(() => import('./pages/auth/Signin'));
const Signup = React.lazy(() => import('./pages/auth/Signup'));
const VerifyEmail = React.lazy(() => import('./pages/auth/VerifyEmail'));
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
              <Route path='/add/new/product' element={<AddProducts />} />
              <Route path='/all/product' element={<AllProducts />} />
              <Route path='/update/product' element={<UpdateProducts />} />
              <Route path='/cart' element={<UpdateProducts />} />
              <Route path='/new/checout/product' element={<Checkout />} />
            </Route>
            <Route path='/auth/signin' element={<Signin />} />
            <Route path='/auth/signup' element={<Signup />} />
            <Route path='/auth/forgetpassword' element={<ForgetPassword />} />
            <Route path='/auth/verify/user/email/:userdetails' element={<VerifyEmail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
