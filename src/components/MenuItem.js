import React, { useState } from "react";
import Image from "next/image";

const MenuItem = ({ menu }) => {
  const [open, setopen] = useState(false);
  const [SizeValue, setSizeValue] = useState("regular");
  return (
    <>
      <div style={{ position: "relative", cursor: "pointer" }}>
        <Image
          src={`/Dominos/${menu.imgurl}`}
          width={320}
          height={280}
          className="menu-img"
          alt={menu.name}
          loading="eager"
          onClick={() => setopen(true)}
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
              onClick={() => setopen(true)}
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
            <p
              style={{ marginTop: -15, fontSize: "9px" }}
              onClick={() => setopen(true)}
            >
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
                  !menu.dessert &&
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
                        onClick={() => setopen(true)}
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
      {/* -------------------------------------------------- */}
      <div
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
          background: "black",
          position: "fixed",
          // top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          display: open ? "block" : "none",
          opacity:0.5
        }}
        onClick={()=>{setopen(false)}}
      ></div>
      <div
        style={{
          width: window.innerWidth,
          // height: window.innerHeight,
          // background: "green",
          background: "white",
          position: "fixed",
          // top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          display: open ? "flex" : "none",
          overflowY: "scroll",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="dialog"
      >
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: "50%",
            boxShadow: "0 0 3px black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 10,
            top: 10,
            padding: "2px",
            cursor: "pointer",
            background: "white",
            zIndex: 6,
          }}
          onClick={() => setopen(false)}
        >
          X
        </div>
        <Image
          src={`/Dominos/${menu.imgurl}`}
          width={window.innerWidth > 500 ? 400 : window.innerWidth}
          height={10}
          className="menu-img1"
          alt={menu.name}
          loading="eager"
        />
        <div
          style={{
            width: window.innerWidth > 500 ? 400 : window.innerWidth,
            height: 170,
            background:
              "linear-gradient(0deg, #000000 -4.12%, rgba(0, 0, 0, 0.81) 45.45%, rgba(0, 0, 0, 0) 97.13%)",
            // position: "absolute",
            // bottom: -10,
            display: "flex",
            justifyContent: "flex-end",
            // alignItems: 'center',
            flexDirection: "column",
            marginTop: "-150px",
          }}
        >
          <div
            style={{
              padding: 10,
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
              onClick={() => setopen(true)}
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
            <p
              style={{ marginTop: -15, fontSize: "9px" }}
              onClick={() => setopen(true)}
            >
              {menu.desc}
            </p>
          </div>
        </div>

        {!menu.gourmet_pizza &&
          !menu.sides &&
          !menu.dessert &&
          !menu.beverages &&
          !menu.meals_combos &&
          !menu.speciality_chicken && (
            <div
              style={{
                width: window.innerWidth > 500 ? 400 : window.innerWidth,
                padding: 10,
              }}
            >
              <h4>Change Size</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                {menu.size.regular && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <input
                        type="radio"
                        value={"regular"}
                        onChange={(e) => setSizeValue(e.target.value)}
                        checked={SizeValue === "regular"}
                      />

                      <span>
                        Regular
                        <span style={{ fontSize: "14px", fontWeight: "300" }}>
                          (Serves 1)
                        </span>
                      </span>
                    </div>
                    <div>
                      <span>₹{menu.size.regular.amount}</span>
                    </div>
                  </div>
                )}
                {menu.size.medium && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <input
                        type="radio"
                        value={"medium"}
                        onChange={(e) => setSizeValue(e.target.value)}
                        checked={SizeValue === "medium"}
                      />
                      <span>
                        Medium
                        <span style={{ fontSize: "14px", fontWeight: "300" }}>
                          (Serves 2)
                        </span>
                      </span>
                    </div>
                    <div>
                      <span>₹{menu.size.medium.amount}</span>
                    </div>
                  </div>
                )}
                {menu.size.large && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <input
                        type="radio"
                        value={"large"}
                        onChange={(e) => setSizeValue(e.target.value)}
                        checked={SizeValue === "large"}
                      />
                      <span>
                        Large
                        <span style={{ fontSize: "14px", fontWeight: "300" }}>
                          (Serves 4)
                        </span>
                      </span>
                    </div>
                    <div>
                      <span>₹{menu.size.large.amount}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        <div
          style={{
            width: window.innerWidth > 500 ? 400 : window.innerWidth,
            padding: 10,
            boxShadow: "0 0 4px gray",
            textTransform: "capitalize",
          }}
        >
          {!menu.gourmet_pizza &&
            !menu.sides &&
            !menu.dessert &&
            !menu.beverages &&
            !menu.meals_combos &&
            !menu.speciality_chicken && (
              <span>
                {SizeValue} | {menu.tossed}
              </span>
            )}

          <div
            style={{
              background: "#e31837",
              padding: "9px 22px 8px 22px",
              cursor: "pointer",
              fontSize: "1.2em",
              borderRadius: "5px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            ₹{menu.size[SizeValue].amount} | Add +
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
