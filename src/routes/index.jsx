// importing components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout';

// importing page
import Home from '../pages/home';
import Cart from '../pages/cart';
import Shop from '../pages/shop';
import Account from '../pages/account';
import Wishlist from '../pages/wishlist';
import Login from '../pages/login';
import Register from '../pages/register';
import AdminLogin from '../pages/admin/login';
import AdminAccount from '../pages/admin/account';
import useAuthStore from '../store/authStore';
import { UserRole } from '../config/Constants';

// route
const PageRouter = () => {
  // store
  const { isAuthenticated, role } = useAuthStore();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/wishlist" exact element={<Wishlist />} />
          {isAuthenticated ? (
            <>
              {role == UserRole.CUSTOMER ? (
                <Route path="/account" exact element={<Account />} />
              ) : (
                <Route path="/admin/account" exact element={<AdminAccount />} />
              )}
            </>
          ) : (
            <>
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/admin/login" exact element={<AdminLogin />} />
            </>
          )}
        </Routes>
      </Layout>
    </Router>
  );
};

export default PageRouter;
