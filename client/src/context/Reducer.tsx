export const initialState = {
  data: [],
  recentItems: [],
  loading: false,
  totalItems: 0,
  totalValue: 0,
  lowStock: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...state, data: action.payload, loading: false };

    case "SET_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};
