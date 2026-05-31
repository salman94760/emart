import AdminAuthSubSideBar from "@components/admin/AdminAuthSubSideBar";
export default function AdminAuthSideBar({ header, subheader }) {
  return (
    <div className="hidden lg:flex flex-col justify-center bg-black text-white p-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]" />

      <div className="relative z-10">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-5">
          SSSN ActiveWear
        </p>

        <h1 className="text-6xl font-bold leading-tight">{header}</h1>

        <p className="text-gray-300 text-lg leading-8 mt-8 max-w-lg">
          {subheader}
        </p>

        <div className="grid grid-cols-3 gap-6 mt-14">
          <AdminAuthSubSideBar title="10K+" title1="Orders" />
          <AdminAuthSubSideBar title="500+" title1="Products" />
          <AdminAuthSubSideBar title="24/7" title1="Monitoring" />
        </div>
      </div>
    </div>
  );
}
