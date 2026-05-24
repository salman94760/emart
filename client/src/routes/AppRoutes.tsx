import { Routes, Route } from "react-router-dom";

// layout papth
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

// public path
import Home from "../pages/public/Home";
import ShopPage from "../pages/public/ShopPage";
import ProductDetailPage from "../pages/public/ProductDetailPage";
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
import AddProduct from "../pages/admin/AddProduct";
import Product from "../pages/admin/Product";
import Sizes from "../pages/admin/Sizes";
import Colors from "../pages/admin/Colors";
import Gender from "../pages/admin/Gender";
import Material from "../pages/admin/Material";
import Tag from "../pages/admin/Tag";
import Category from "../pages/admin/Category";

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add/product" element={<AddProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sizes" element={<Sizes />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/mateial" element={<Material />} />
        <Route path="/tag" element={<Tag />} />
        <Route path="/category" element={<Category />} />
      </Route>

      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />

      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
};

export default UserRouter;
