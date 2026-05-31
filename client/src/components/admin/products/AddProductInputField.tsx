const AddProductFileds = ({
  label,
  name,
  fieldtype,
  placeholder,
  pvalue,
  pfunc,
}) => {
  return (
    <div className="p-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <input
        value={pvalue}
        onChange={pfunc}
        type={fieldtype}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
      />
    </div>
  );
};

export default AddProductFileds;
