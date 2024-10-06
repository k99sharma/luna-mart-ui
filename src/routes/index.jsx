// importing components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout';

// importing page
import Home from '../pages/home';

// route
const PageRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default PageRouter;
