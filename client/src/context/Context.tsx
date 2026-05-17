import { createContext, ReactNode, useReducer } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { initialState, reducer } from "./Reducer";
import api from "../services/api";

type AppContextType = {
  state: typeof initialState;
  dispatch: Dispatch<any>;
  toast: typeof import("react-toastify").toast;
  Register: (data: any) => Promise<any>;
};

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const navigate = useNavigate();
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
    } catch (err: any) {
      return { success: false, message: err.response.data.message };
    }
  };

  const Login = async (data) => {
    try {
      const res = await api.post("api/auth/login", data);
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
    } catch (err: any) {
      return { success: false, message: err.response.data.message };
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch, toast, Register, Login }}>
      {children}
    </AppContext.Provider>
  );
};
