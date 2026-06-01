import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Loading path
import Loading from "@/components/Loading";

// layout papth
import UserLayout from "@/layouts/UserLayout";
import AdminLayout from "@/layouts/AdminLayout";

// public path
import Home from "@pages/public/Home";
import ShopPage from "@pages/public/ShopPage";
import ProductDetailPage from "@pages/public/ProductDetailPage";
import About from "@pages/public/About";
import Contact from "@pages/public/Contact";
import FAQ from "@pages/public/FAQ";
import Terms from "@pages/public/Terms";
import Policy from "@pages/public/PrivacyPolicy";

// auth path
import UserLogin from "@pages/auth/UserLogin";
import UserRegister from "@pages/auth/UserRegister";

// admin auth path
const AdminLogin = lazy(() => import("@adminpage/auth/AdminLogin"));
const AdminRegister = lazy(() => import("@adminpage/auth/AdminRegister"));

// admin after login paths
import Dashboard from "@adminpage/Dashboard";
import AddProduct from "@adminpage/AddProduct";
import Product from "@adminpage/Product";
import Sizes from "@adminpage/Sizes";
import Colors from "@adminpage/Colors";
import Gender from "@adminpage/Gender";
import Material from "@adminpage/Material";
import Tag from "@adminpage/Tag";
import Category from "@adminpage/Category";

const UserRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default UserRouter;
