// importing custom components
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';

// Layout
function Layout({ children }) {
  return (
    <div className="layout">
      <Container>
        <div className="layout__navbar">
          <Navbar />
        </div>
        <div className="layout__app">{children}</div>
        <div className="layout__footer"></div>
      </Container>
    </div>
  );
}

export default Layout;
