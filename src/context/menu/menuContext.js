"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { menu } from "@/data/menu";
import menuReducer from "./menuReducer";
const MenuContext = createContext();

const initialState = {
  menu,
  allTypes: [
    "Veg Pizza",
    "Non-Veg Pizza",
    "Pizza Mania",
    "Sides",
    "Dessert",
    "Bestsellers",
    "Beverages",
    "Meals & Combos",
    "Speciality Chicken",
    "New Launches",
    "Gourmet Pizza",
  ],
  type: "Veg Pizza",
  filteredMenu: [],
  isVeg: "all",
  sortBy: "relevance",
};

const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  // useEffect(() => {
  //   setmenu();
  // }, []);

  // const setmenu = async () => {
  //   const res = await fetch("/api/menu");
  //   const menu = await res.json();
  //   dispatch({ type: "SET_MENU", payload: menu });
  // };

  const setisveg = (type) => {
    dispatch({ type: "SET_VEG", payload: type });
  };

  const setsortBy = (type) => {
    dispatch({ type: "SET_SORT_BY", payload: type });
  };

  const settype = (type) => {
    let copyMenu = [...menu];

    if (state.isVeg === "veg") {
      copyMenu = copyMenu.filter((m) => m.veg === true);
    } else if (state.isVeg === "non-veg") {
      copyMenu = copyMenu.filter((m) => m.veg === false);
    }

    const newMenu = copyMenu.filter((m) => {
      switch (type) {
        case "Veg Pizza":
          return (
            m.veg === true &&
            m.pizza_mania === false &&
            m.sides === false &&
            m.desert === false &&
            m.beverages === false &&
            m.meals_combos === false &&
            m.speciality_chicken === false
          );
        case "Non-Veg Pizza":
          return (
            m.veg === false &&
            m.pizza_mania === false &&
            m.sides === false &&
            m.desert === false &&
            m.beverages === false &&
            m.meals_combos === false &&
            m.speciality_chicken === false
          );
        case "Pizza Mania":
          return m.pizza_mania === true;
        case "Sides":
          return m.sides === true;
        case "Dessert":
          return m.desert === true;
        case "Bestsellers":
          return m.bestseller === true;
        case "Beverages":
          return m.beverages === true;
        case "Meals & Combos":
          return m.meals_combos === true;
        case "Speciality Chicken":
          return m.speciality_chicken === true;
        case "New Launches":
          return m.new_launches === true;
        case "Gourmet Pizza":
          return m.gourmet_pizza === true;
      }
    });

    if (state.sortBy === "lth") {
      newMenu.sort((a, b) => {
        if (parseInt(a.size.regular.amount) < parseInt(b.size.regular.amount))
          return -1;
        if (parseInt(a.size.regular.amount) > parseInt(b.size.regular.amount))
          return 1;
        return 0;
      });
    } else if (state.sortBy === "htl") {
      newMenu.sort((a, b) => {
        if (parseInt(b.size.regular.amount) < parseInt(a.size.regular.amount))
          return -1;
        if (parseInt(b.size.regular.amount) > parseInt(a.size.regular.amount))
          return 1;
        return 0;
      });
    }

    dispatch({ type: "SET_TYPE", payload: { type, filteredMenu: newMenu } });
  };

  return (
    <MenuContext.Provider value={{ ...state, settype, setisveg, setsortBy }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export default MenuProvider;
