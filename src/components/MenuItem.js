import React, { useState } from "react";
import Image from "next/image";

const MenuItem = ({ menu }) => {
  const [open, setopen] = useState(false);
  const [SizeValue, setSizeValue] = useState("regular");
  const [currPrice, setcurrPrice] = useState(menu.size[SizeValue].amount);
  const [extraToppings, setextraToppings] = useState([]);

  const vegToppings = [
    {
      name: "Grilled Mushrooms",
      price: "60",
    },
    {
      name: "Onion",
      price: "60",
    },
    {
      name: "Crisp Capsicum",
      price: "60",
    },
    {
      name: "Fresh Tomato",
      price: "60",
    },
    {
      name: "Paneer",
      price: "60",
    },
    {
      name: "Red Pepper",
      price: "60",
    },
    {
      name: "Jalapeno",
      price: "60",
    },
    {
      name: "Black Olive",
      price: "60",
    },
  ];

  const nonvegToppings = [
    {
      name: "Pepper Barbecue Chicken",
      price: "75",
    },
    {
      name: "Peri - Peri Chicken",
      price: "75",
    },
    {
      name: "Grilled Chicken Rasher",
      price: "75",
    },
    {
      name: "Chicken Sausage",
      price: "75",
    },
    {
      name: "Chicken Tikka",
      price: "75",
    },
    {
      name: "Chicken Pepperoni",
      price: "75",
    },
    {
      name: "Chicken Keema",
      price: "75",
    },
  ];

  const removeTopping = (array, topping) => {
    const index = array.indexOf(topping);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  };

  return (
    <>
      <div style={{ position: "relative", cursor: "pointer" }}>
        {menu.bestseller && (
          <div
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              background: "#fffc",
              fontSize: "12px",
              border: "0.5px solid #ddd",
              boxShadow:
                "0px 2px 4px rgba(0,0,0,.12), 0px 0px 1px rgba(0,0,0,.16)",
              borderRadius: "4px",
              padding: "0 4px",
            }}
          >
            <span>Bestseller</span>
          </div>
        )}
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
                onClick={() => setopen(true)}
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
          opacity: 0.5,
        }}
        onClick={() => {
          setextraToppings([]);
          setopen(false);
        }}
      ></div>
      <div
        style={{
          width: window.innerWidth,
          // height: window.innerHeight,
          // background: "green",
          background: "white",
          position: "fixed",
          top:
            !menu.dessert &&
            !menu.sides &&
            !menu.beverages &&
            !menu.meals_combos &&
            !menu.speciality_chicken &&
            !menu.gourmet_pizza &&
            170,
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
          onClick={() => {
            setopen(false);
            setextraToppings([]);
          }}
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
                paddingBottom: "30px",
                height: "200px",
                overflowY: "scroll",
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
                        onChange={(e) => {
                          setSizeValue(e.target.value);
                          setcurrPrice(menu.size["regular"].amount);
                          setextraToppings([]);
                        }}
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
                        onChange={(e) => {
                          setSizeValue(e.target.value);
                          setcurrPrice(menu.size["medium"].amount);
                          setextraToppings([]);
                        }}
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
                        onChange={(e) => {
                          setSizeValue(e.target.value);
                          setcurrPrice(menu.size["large"].amount);
                          setextraToppings([]);
                        }}
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
              {/* --------------------------------------- */}
              {!menu.pizza_mania && (
                <>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background:
                          "linear-gradient(0deg, #EEFAFF, #EEFAFF),#fff",
                        marginTop: "20px",
                        padding: "5px 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          // onChange={()=>{}}
                          checked={extraToppings.includes("Extra Cheese")}
                          onChange={() => {
                            // console.log("Add Extra cheese to crust");
                            if (extraToppings.includes("Extra Cheese")) {
                              let a = [...extraToppings];
                              // a.pop("Extra Cheese");
                              setextraToppings(
                                removeTopping(extraToppings, "Extra Cheese")
                              );
                              setcurrPrice((prev) =>SizeValue==="regular"?parseInt(prev) - 50:SizeValue==="medium"?parseInt(prev)-75:parseInt(prev)-95 );
                            } else {
                              setextraToppings([
                                ...extraToppings,
                                "Extra Cheese",
                              ]);
                              setcurrPrice((prev) =>SizeValue==="regular"?parseInt(prev) +50:SizeValue==="medium"?parseInt(prev)+75:parseInt(prev)+95 );
                            }
                          }}
                          style={{ accentColor: "#38AF00" }}
                        />
                        <span>Add Extra cheese to crust</span>
                      </div>
                      <span>+ ₹{SizeValue==="regular"?50:SizeValue==="medium"?75:95}.00</span>
                    </div>
                  </div>
                  {/* ---------------------- */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "15px",
                    }}
                  >
                    <h4>Add Veg Toppings</h4>
                    <Image
                      src={"/Dominos/tag-veg.svg"}
                      width={13}
                      height={13}
                      alt="veg"
                    />
                  </div>
                  {vegToppings.map((v) => (
                    <div
                      key={v.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                        padding: "5px 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          // onChange={(e) => {
                          //   console.log(e.target.value);
                          // }}
                          onChange={() => {
                            // console.log(v);
                            if (extraToppings.includes(v.name)) {
                              let a = [...extraToppings];
                              // a.pop(v.name);
                              setextraToppings(
                                removeTopping(extraToppings, v.name)
                              );
                              setcurrPrice((prev) =>SizeValue==="regular"?parseInt(prev) - 35:SizeValue==="medium"?parseInt(prev)-60:parseInt(prev)-80 );
                            } else {
                              setextraToppings([...extraToppings, v.name]);
                              setcurrPrice((prev) => SizeValue==="regular"?parseInt(prev) +35:SizeValue==="medium"?parseInt(prev)+60:parseInt(prev)+80);
                            }
                          }}
                          checked={extraToppings.includes(v.name)}
                          style={{ accentColor: "#38AF00" }}
                        />
                        <span>{v.name}</span>
                      </div>
                      <span>+ ₹{SizeValue==="regular"?35:SizeValue==="medium"?60:80}.0</span>
                    </div>
                  ))}
                  {/* ---------------------- */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "15px",
                    }}
                  >
                    <h4>Add non-veg Toppings</h4>
                    <Image
                      src={"/Dominos/tag-non-veg.svg"}
                      width={13}
                      height={13}
                      alt="veg"
                    />
                  </div>
                  {menu.veg && (
                    <span style={{ fontSize: "10px", fontWeight: "400" }}>
                      You will be adding non-veg toppings to a veg pizza.{" "}
                    </span>
                  )}
                  {nonvegToppings.map((v) => (
                    <div
                      key={v.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                        padding: "5px 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          // onChange={(e) => {
                          //   console.log(e.target.value);
                          // }}
                          onChange={() => {
                            // console.log(v);
                            if (extraToppings.includes(v.name)) {
                              let a = [...extraToppings];
                              // a.pop(removeTopping());
                              setextraToppings(
                                removeTopping(extraToppings, v.name)
                              );
                              setcurrPrice((prev) =>SizeValue==="regular"?parseInt(prev) - 50:SizeValue==="medium"?parseInt(prev)-75:parseInt(prev)-95 );
                            } else {
                              setextraToppings([...extraToppings, v.name]);
                              setcurrPrice((prev) => SizeValue==="regular"?parseInt(prev) + 50:SizeValue==="medium"?parseInt(prev)+75:parseInt(prev)+95);
                            }
                          }}
                          checked={extraToppings.includes(v.name)}
                          style={{ accentColor: "#38AF00" }}
                        />
                        <span>{v.name}</span>
                      </div>
                      <span>+ ₹{SizeValue==="regular"?50:SizeValue==="medium"?75:95}.0</span>
                    </div>
                  ))}
                </>
              )}
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

          {extraToppings.length !== 0 && (
            <div>
              <span style={{ fontSize: "11px", fontWeight: "bold" }}>
                Added:
              </span>
              {extraToppings.map((e) => (
                <span key={e} style={{ fontSize: "11px", fontWeight: "300" }}>
                  {e}
                  {extraToppings.length > 1 && ", "}
                </span>
              ))}
            </div>
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
            ₹{currPrice} | Add +
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
