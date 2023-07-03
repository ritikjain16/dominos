import { useMenuContext } from "@/context/menu/menuContext";
import React from "react";

const MenuType = ({ item }) => {
  const { filteredMenu, type, settype } = useMenuContext();
  
  return (
    <div
      style={{
        padding: "5px",
        borderBottom: type === item && "5px solid #e31837",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        color: type === item ? "black" : "gray",
        cursor: "pointer",
        transition: "all 0.1s linear",
        textAlign: "center",
        height:80
      }}
      onClick={() => {
        settype(item);
        window.scrollTo(0, 0);
      }}
    >
      <h4 className="menu-type-heading">
        {item} {item === type && `(${filteredMenu.length})`}
      </h4>
    </div>
  );
};

export default MenuType;
