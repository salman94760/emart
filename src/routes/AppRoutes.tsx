import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout papth
import UserLayout from "../layouts/UserLayout";

// public path
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import FAQ from "../pages/public/FAQ";
import Terms from "../pages/public/Terms";
import Policy from "../pages/public/PrivacyPolicy";

const UserRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
        </Route>
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default UserRouter;
