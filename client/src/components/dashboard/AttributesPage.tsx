import { useEffect, useRef, useContext } from "react";

import { AppContext } from "../../context/Context";

type Props = {
  type: string;
  label: string;
};

const AttributePage = ({ type, label }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const { state, toast, handleSubmitAttr, handleFetchAttr, deleteAttributes } =
    useContext(AppContext);

  useEffect(() => {
    handleFetchAttr({
      type,
    });
  }, [state.attrItems]);

  const handleSubmit = async () => {
    if (!inputRef.current?.value) {
      toast.error(`${label} field must not be empty`);

      return;
    }

    const result = await handleSubmitAttr({
      data: {
        [type]: inputRef.current.value,

        type,
      },

      attrmethod: "insert",
    });

    if (result?.success === true) {
      toast.success(`${label} added successfully`);

      handleFetchAttr({
        type,
      });

      inputRef.current.value = "";
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm mt-10 p-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Left */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product {label}
            </label>

            <input
              ref={inputRef}
              type="text"
              placeholder={`Add product ${label}`}
              className="
                w-full
                rounded-2xl
                border
                border-gray-300
                px-5
                py-4
                outline-none
                focus:ring-2
                focus:ring-black
              "
            />
          </div>

          <button
            onClick={handleSubmit}
            className="
              w-full
              bg-black
              text-white
              py-4
              rounded-2xl
              text-lg
              font-semibold
            "
          >
            Add {label}
          </button>
        </div>

        {/* Right */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 border-b items-center">
                <th className="pb-4">Sr No.</th>

                <th className="pb-4">{label}</th>

                <th className="pb-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {state?.attrItems?.map((val, index) => (
                <tr key={index} className="text-center">
                  <td className="py-5 font-semibold">{index + 1}</td>

                  <td>{val[type]}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger me-2"
                      onClick={() => {
                        deleteAttributes(val._id, type);
                      }}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttributePage;
