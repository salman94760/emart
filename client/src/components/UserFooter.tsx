const UserFooter = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
      <div>
        <h1 className="text-2xl font-bold">SSSN</h1>

        <p className="text-gray-500 text-sm mt-1">Premium Fashion Store</p>
      </div>

      <div className="flex items-center gap-6 text-gray-600 font-medium">
        <a href="/faq" className="hover:text-black transition">
          FAQ
        </a>

        <a href="/privacy-policy" className="hover:text-black transition">
          Privacy Policy
        </a>

        <a href="/terms" className="hover:text-black transition">
          Terms
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm">
        © 2026 SSSN. All rights reserved.
      </p>
    </div>
  );
};

export default UserFooter;
