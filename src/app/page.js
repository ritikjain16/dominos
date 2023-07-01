"use client";
import React, { useState } from "react";
import { menu } from "../data/menu";
import MenuItem from "@/components/MenuItem";
import MenuType from "@/components/MenuType";
const Page = () => {
  const [type, settype] = useState("Veg Pizza");
  const allTypes = [
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
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid gray",
          gap: "5px",
          height: "70px",
        }}
      >
        {allTypes.map((item) => (
          <MenuType key={item} item={item} type={type} settype={settype} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {menu.map((item) => (
          <MenuItem key={Math.random()} menu={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
