import { createContext, ReactNode, useReducer } from "react";
import { initialState, reducer } from "./Reducer";
import api from "../services/api";
import StatsCards from "../components/StatsCard";

import { Dispatch } from "react";
import { toast } from "react-toastify";

type RegisterData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  cpassword: string;
  type?: string;
  created_at?: number;
  updated_at?: number;
};

type RegisterResponse = {
  success: boolean;
  data?: unknown;
};

type ActionType = { type: "LOGIN"; payload: unknown } | { type: "LOGOUT" };

type AppContextType = {
  state: typeof initialState;
  dispatch: Dispatch<ActionType>;
  toast: typeof toast;
  Register: (data: RegisterData) => Promise<RegisterResponse>;
};

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Register = async (data) => {
    try {
      const res = await api.post("/api/auth/register", data);
      if (res.data.success === true) {
        return {
          success: true,
          data: res.data,
        };
      }

      return {
        success: false,
        message: res.data.message,
      };
    } catch (err: unknown) {
      return { success: false, message: err.response.data.message };
    }
  };

  const Login = async (data) => {
    try {
      const res = await api.post("api/auth/login", data);
      if (res.data.success === true) {
        const result = res.data.data;
        localStorage.setItem("loginuser", result.user.name);
        localStorage.setItem("loginemail", result.user.email);
        localStorage.setItem("loginToken", result.token);
        return {
          success: true,
          data: res.data,
        };
      }

      return {
        success: false,
        message: res.data.message,
      };
    } catch (err: unknown) {
      return { success: false, message: err.response.data.message };
    }
  };

  const handleSubmitAttr = async (d) => {
    try {
      let res = "";
      if (d.attrmethod === "insert") {
        res = await api.post("/add/attributes", d.data);
      }
      if (res.data.success === true) {
        const result = res.data.data;

        return {
          success: true,
          data: result,
        };
      }

      return {
        success: false,
        message: res.data.message,
      };
    } catch (err: unknown) {
      return { success: false, message: err.response?.data?.message };
    }
  };

  const handleFetchAttr = async (data) => {
    try {
      const res = await api.get("/attributes", { params: data });
      if (res.data.success === true) {
        const result = res.data.data;
        dispatch({ type: "SET_ATTR_ITEMS", payload: result });
      }
    } catch (err: unknown) {
      return { success: false, message: err.response?.data?.message };
    }
  };

  const handleFetchAllAttr = async (data) => {
    try {
      const res = await api.get("/all/attributes");
      if (res.data.success === true) {
        const result = res.data.data;
        dispatch({ type: "SET_ALL_ATTR_ITEMS", payload: result });
      }
    } catch (err: unknown) {
      return { success: false, message: err.response?.data?.message };
    }
  };

  const deleteAttributes = async (id, type) => {
    try {
      const result = await api.delete(`/attrdelete/${id}`, {
        params: {
          type,
        },
      });
      if (result.data.success === true) {
        if (type === "size") {
          await handleFetchAttr({ type: "size" });
        }
      }
    } catch (err: unknown) {
      return { success: false, message: err.response?.data?.message };
    }
  };

  const AddProduct = async (data) => {
    try {
      const res = await api.post("/add/product", data);
      if (res.data.success === true) {
        return {
          success: true,
          data: res.data,
        };
      }

      return {
        success: false,
        message: res.data.message,
      };
    } catch (err: unknown) {
      return { success: false, message: err.response.data.message };
    }
  };

  const Product = async () => {
    try {
      const res = await api.post("/product");
      if (res.data.success === true) {
        const result = res.data.data;
        dispatch({ type: "SET_ALL_PRODUCT_ITEMS", payload: result });
        return {
          success: true,
          data: res.data,
        };
      }

      return {
        success: false,
        message: res.data.message,
      };
    } catch (err: unknown) {
      return { success: false, message: err.response.data.message };
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        toast,
        Register,
        Login,
        StatsCards,
        handleSubmitAttr,
        handleFetchAttr,
        handleFetchAllAttr,
        deleteAttributes,
        AddProduct,
        Product,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
