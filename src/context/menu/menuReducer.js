const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload.type,
        filteredMenu: action.payload.filteredMenu,
      };
    case "SET_VEG":
      return {
        ...state,
        isVeg: action.payload,
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    // case "SET_MENU":
    //   return {
    //     ...state,
    //     menu: action.payload,
    //   };
    default:
      return state;
  }
};

export default menuReducer;
