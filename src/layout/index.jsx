// importing components
import Navbar from '../components/Navbar';

// Layout
function Layout({ children }) {
  return (
    <div className="layout px-5">
      <div className="layout__navbar">
        <Navbar />
      </div>
      <div className="layout__child">{children}</div>
      <div className="layout__footer">Footer</div>
    </div>
  );
}

export default Layout;
