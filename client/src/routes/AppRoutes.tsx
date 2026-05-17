import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout papth
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

// public path
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import FAQ from "../pages/public/FAQ";
import Terms from "../pages/public/Terms";
import Policy from "../pages/public/PrivacyPolicy";

// auth path
import UserLogin from "../pages/auth/UserLogin";
import UserRegister from "../pages/auth/UserRegister";

// admin auth path
import AdminLogin from "../pages/admin/auth/AdminLogin";
import AdminRegister from "../pages/admin/auth/AdminRegister";

// admin after login paths
import Dashboard from "../pages/admin/Dashboard";

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />

      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
};

export default UserRouter;
