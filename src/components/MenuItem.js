import React from "react";
import Image from "next/image";

const MenuItem = ({ menu }) => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        src={`/Dominos/${menu.imgurl}`}
        width={320}
        height={280}
        className="menu-img"
        alt={menu.name}
        loading="eager"
      />
      <div
        style={{
          width: 320,
          height: 170,
          background:
            "linear-gradient(0deg, #000000 -4.12%, rgba(0, 0, 0, 0.81) 45.45%, rgba(0, 0, 0, 0) 97.13%)",
          position: "absolute",
          bottom: -10,
          display: "flex",
          justifyContent: "flex-end",
          // alignItems: 'center',
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: 5,
            color: "white",
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // flexDirection: 'column',
            // width: 300,
            // height: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 4,
            }}
          >
            {menu.veg ? (
              <Image
                src={"/Dominos/tag-veg.svg"}
                width={13}
                height={13}
                alt="veg"
              />
            ) : (
              <Image
                src={"/Dominos/tag-non-veg.svg"}
                width={13}
                height={13}
                alt="non-veg"
              />
            )}
            <h3>{menu.name}</h3>
          </div>
          <p style={{ marginTop: -15, fontSize: "9px" }}>
            {menu.desc.substr(0, 125)}
            {menu.desc.length > 125 && "..."}
          </p>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}
          >
            <div style={{ marginTop: -15 }}>
              <p>₹{menu.size.regular.amount}</p>
              {!menu.sides &&
                !menu.desert &&
                !menu.beverages &&
                !menu.meals_combos &&
                !menu.speciality_chicken && (
                  <>
                    <p
                      style={{
                        marginTop: -18,
                        fontSize: "12px",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {menu.size.regular.size} | {menu.tossed} {">"}
                    </p>
                    <p style={{ marginTop: -18 }}>----------------------</p>
                  </>
                )}
            </div>
            <div
              style={{
                background: "#e31837",
                padding: "9px 22px 8px 22px",
                cursor: "pointer",
                fontSize: "1.2em",
                borderRadius: "5px",
              }}
            >
              Add +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
