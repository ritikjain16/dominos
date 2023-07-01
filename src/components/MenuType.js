import React from "react";

const MenuType = ({ item, type, settype }) => {
  return (
    <div
      style={{
        padding: "5px",
        borderBottom: type === item && "5px solid #e31837",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        color: type === item ? "black" : "gray",
        cursor: "pointer",
        transition:"all 0.1s linear"
      }}
      onClick={() => {
        settype(item);
      }}
    >
      <h4>{item}</h4>
    </div>
  );
};

export default MenuType;
