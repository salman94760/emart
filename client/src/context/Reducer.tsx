export const initialState = {
  data: [],
  recentItems: [],
  attrItems: [],
  allAttrItems: [],
  loading: false,
  totalItems: 0,
  totalValue: 0,
  lowStock: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...state, data: action.payload, loading: false };

    case "SET_ATTR_ITEMS":
      return { ...state, attrItems: action.payload, loading: false };

    case "SET_ALL_ATTR_ITEMS":
      return { ...state, allAttrItems: action.payload, loading: false };

    case "SET_ALL_PRODUCT_ITEMS":
      return { ...state, allProductItems: action.payload, loading: false };

    case "SET_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};
