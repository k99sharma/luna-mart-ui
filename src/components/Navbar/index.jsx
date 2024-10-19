// importing components
import { Link } from 'react-router-dom';

// importing constants
import { PagePath } from '../../config/Constants';
import useAuthStore from '../../store/authStore';

// navbar
const Navbar = () => {
  // store
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="navbar py-3 flex justify-between align-bottom">
      <div className="navbar__banner">
        <Link to={PagePath.HOME}>Luna Mart</Link>
      </div>

      <div className="navbar__explore">
        <div className="navbar__explore__shop">
          <Link to={PagePath.SHOP}>Shop</Link>
        </div>
      </div>

      <div className="navbar__user__actions flex">
        {isAuthenticated ? (
          <div className="navbar__user__actions__account mx-5">
            <Link to={PagePath.ACCOUNT}>Account</Link>
          </div>
        ) : (
          <div className="navbar__user__actions__login mx-5">
            <Link to={PagePath.LOGIN}>Login</Link>
          </div>
        )}

        <div className="navbar__user_actions__wishlist mx-5">
          <Link to={PagePath.WISHLIST}>Wishlist</Link>
        </div>

        <div className="navbar__user__actions__cart mx-5">
          <Link to={PagePath.CART}>Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
