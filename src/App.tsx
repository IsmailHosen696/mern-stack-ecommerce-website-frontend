import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import AllProducts from './pages/Gen/AllProducts';
import Checkout from './pages/Gen/Checkout';
import Home from './pages/Gen/Home';
import Orders from './pages/Gen/Orders';
import {
  AddProduct,
  AdminAllProducts,
  AllOrders,
  Allusers,
  UpdateProduct
} from './pages/dashboard';
import Cart from './pages/Gen/Cart';
import AdminIndex from './pages/dashboard/AdminIndex';

const Index = React.lazy(() => import('./pages/Gen/Index'));
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
              <Route path='/all/products' element={<AllProducts />} />
              <Route path='/update/product' element={<UpdateProduct />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/new/checout/product' element={<Checkout />} />
            </Route>
            <Route path='/admin' element={<AdminIndex />}>
              <Route path='dashboard' element={<AdminAllProducts />} />
              <Route path='add/new/product' element={<AddProduct />} />
              <Route path='all/users' element={<Allusers />} />
              <Route path='all/orders' element={<AllOrders />} />
            </Route>
            <Route path='/auth/signin' element={<Signin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
