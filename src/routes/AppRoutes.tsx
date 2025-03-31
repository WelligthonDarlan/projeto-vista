import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Store" element={<Store />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
