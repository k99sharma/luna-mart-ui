// importing components
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { PagePath } from '../../config/Constants';

// account page
function Account() {
  const navigate = useNavigate();

  // auth store
  const { logout } = useAuthStore();

  const handleLogout = () => {
    console.log('Logout is successful.');

    logout();

    // navigate to home page
    navigate(PagePath.HOME);
  };

  return (
    <div className="account">
      <div className="account__logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Account;
