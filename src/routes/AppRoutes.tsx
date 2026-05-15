import { BrowserRouter, Routes, Route } from "react-router-dom";

// public path
import Home from "../pages/public/Home";
// import About from '../pages/public/About';
// import Contact from '../pages/public/Contact';
// import FAQ from '../pages/public/FAQ';
// import Terms from '../pages/public/Terms';
// import PrivacyPolicy from '../pages/public/PrivacyPolicy';

const UserRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />}/>
				<Route path="/contact" element={<Contact />}/>
				<Route path="/faq" element={<FAQ />}/>
				<Route path="/terms" element={<Terms />}/>
				<Route path="/privacy-policy" element={<PrivacyPolicy />}/>*/}
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default UserRouter;
