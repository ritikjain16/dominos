"use client";
import React, { useEffect } from "react";
import MenuItem from "@/components/MenuItem";
import MenuType from "@/components/MenuType";
import { useMenuContext } from "@/context/menu/menuContext";
import Image from "next/image";
const Page = () => {
  const {
    filteredMenu,
    allTypes,
    type,
    settype,
    setisveg,
    isVeg,
    setsortBy,
    sortBy,
  } = useMenuContext();

  useEffect(() => {
    settype(type);
  }, [type, isVeg, sortBy]);

  return (
    <div>
      <div
      className="top-menu"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "5px",
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "white",
          overflowX:"scroll",
          wordWrap:"none"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            boxShadow: isVeg === "veg" ? "0 0 2px #005491" : "0 0 1px black",
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
            background: isVeg === "veg" ? "#ecf7ff" : "white",
            margin: "5px",
          }}
          onClick={() => {
            if (isVeg === "all" || isVeg === "non-veg") {
              setisveg("veg");
            } else {
              setisveg("all");
            }
          }}
        >
          <Image src={"/Dominos/tag-veg.svg"} width={13} height={13} alt="veg" />
          <span style={{ fontSize: "13px" }}>Veg&nbsp;Only</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            boxShadow:
              isVeg === "non-veg" ? "0 0 2px #005491" : "0 0 1px black",
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
            background: isVeg === "non-veg" ? "#ecf7ff" : "white",
            margin: "5px",
          }}
          onClick={() => {
            if (isVeg === "all" || isVeg === "veg") {
              setisveg("non-veg");
            } else {
              setisveg("all");
            }
          }}
        >
          <Image src={"/Dominos/tag-non-veg.svg"} width={13} height={13} alt="non-veg" />
          <span style={{ fontSize: "13px" }}>Non&nbsp;Veg&nbsp;Only</span>
        </div>
        {/* ---------------------------------- */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            boxShadow: sortBy === "lth" ? "0 0 2px #005491" : "0 0 1px black",
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
            background: sortBy === "lth" ? "#ecf7ff" : "white",
            margin: "5px",
          }}
          onClick={() => {
            if (sortBy === "relevance" || sortBy === "htl") {
              setsortBy("lth");
            } else {
              setsortBy("relevance");
            }
          }}
        >
          {/* <Image src={"/Dominos/tag-non-veg.svg"} width={13} height={13} /> */}
          <span style={{ fontSize: "13px" }}>Price:&nbsp;Low&nbsp;To&nbsp;High</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            boxShadow: sortBy === "htl" ? "0 0 2px #005491" : "0 0 1px black",
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
            background: sortBy === "htl" ? "#ecf7ff" : "white",
            margin: "5px",
          }}
          onClick={() => {
            if (sortBy === "relevance" || sortBy === "lth") {
              setsortBy("htl");
            } else {
              setsortBy("relevance");
            }
          }}
        >
          {/* <Image src={"/Dominos/tag-non-veg.svg"} width={13} height={13} /> */}
          <span style={{ fontSize: "13px" }}>Price:&nbsp;High&nbsp;To&nbsp;Low</span>
        </div>
      </div>
      <div
        className="menu-type"
        style={{
          display: "flex",
          alignItems: "center",
          // borderTop: "1px solid gray",
          // borderBottom: "1px solid gray",
          boxShadow: "0 0 1px black",
          gap: "5px",
          height: "70px",
          position: "sticky",
          top: 35,
          zIndex: 2,
          background: "white",
          width: "100%",
          overflowX: "scroll",
          paddingBottom: 8,
        }}
      >
        {allTypes.map((item) => (
          <MenuType key={item} item={item} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {filteredMenu.map((item) => (
          <MenuItem key={Math.random()} menu={item} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Page;
