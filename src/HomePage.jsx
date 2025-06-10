import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";

const categories = [
  { name: "Mocktails", image: "/images/Mocktails.png" },
  { name: "Ice-Cream", image: "/images/icecream.png" },
  { name: "Shakes", image: "/images/shakes.png" },
  { name: "Snacks", image: "/images/snacks.png" },
  { name: "Butter Milk", image: "/images/buttermilk.png" },
  { name: "Lassi", image: "/images/Laasi.png" },
  { name: "Maggie", image: "/images/maggie.png" },
  { name: "Sizzling Brownie", image: "/images/sizzling brownie.png" },
  { name: "Tea Items", image: "/images/tea.png" },
  { name: "Soda", image: "/images/soda.png" },
  { name: "Matka Beverages", image: "/images/Matka Beverages.png" },
  { name: "Special Dessert Item", image: "/images/Dessert.png" }, 
  { name: "Combo Offer", image: "/images/combo.png" },// <-- changed name here
];

// Ice-Cream flavors and prices
const iceCreamFlavors = [
  { name: "Vanilla", price: 39 },
  { name: "Butterscotch", price: 49 },
  { name: "Chocolate", price: 59 },
  { name: "Black Current", price: 69 },
  { name: "American Dryfruit", price: 79 },
];

// Buttermilk flavors and prices
const buttermilkFlavors = [
  { name: "Classic Buttermilk", price: 29 },
  { name: "Masala Buttermilk", price: 39 },
];

const lassiFlavors = [
  { name: "Sweet Lassi", price: 39 },
  { name: "Banana Lassi", price: 39 },
  { name: "Mango Lassi", price: 39 },
  { name: "Strawberry Lassi", price: 39 },
  { name: "Chocolate Lassi", price: 49 },
  { name: "Dry Fruit Lassi", price: 69 },
];

const snacksItems = [
  { name: "French Fries Small", price: 59 },
  { name: "French Fries Large", price: 99 },
  { name: "Egg Kulfi", price: 49 },
  { name: "Veg Spring Rolls", price: 99 },
  { name: "Chicken Spring Rolls", price: 99 },
  { name: "Chicken PopCorns", price: 99 },
  { name: "Veg Fried Momos", price: 89 },
  { name: "Paneer Fried Momos", price: 99 },
  { name: "Chicken Nuggets", price: 99 },
  { name: "Chicken Fried Momos", price: 119 },
];

const maggieItems = [
  { name: "Veg Maggie", price: 49 },
  { name: "Veg Fried Maggie", price: 59 },
  { name: "Egg Maggie", price: 59 },
  { name: "Egg Fried Maggie", price: 69 }, 
];

const sizzlingBrownieItems = [
  { name: "Sizzling Brownie", price: 139 },
];

const comboOfferItems = [
  { name: "French Fries + Matka Soda (Any Single Flavoured)", price: 79 },
  { name: "Maggie + Mocktail (Any Single Flavoured)", price: 89 },
  { name: "French Fries + Mocktail (Any Single Flavoured)", price: 99 },
  { name: "Veg Steamed momos + Mocktail (Any Single Flavoured)", price: 109 },
  { name: "French Fries + Butterscotch Shake", price: 99 },
  { name: "Chicken Steamed momos + Mocktail (Any Single Flavoured)", price: 129 },
  { name: "Chicken Fried Momos + Oreo Shake", price: 169 },
];

// Tea Items
const teaItems = [
  { name: "Tea", price: 15 },
  { name: "Ginger Tea", price: 20 },
  { name: "Elaichi Tea", price: 25 },
  { name: "Lemon Tea", price: 20 },
  { name: "Green Tea", price: 20 },
  { name: "Sonti Tea", price: 20 },
  { name: "Coffee", price: 20 },
  { name: "Black Coffee", price: 20 },
  { name: "Milk", price: 20 },
  { name: "Boost", price: 20 },
  { name: "Horlics", price: 20 },
  { name: "Bornvita", price: 20 },
  { name: "Sonti Milk", price: 20 },
];

// Soda Items
const sodaItems = [
  { name: "Fresh Lime Salt", price: 20 },
  { name: "Fresh Lime Sweet", price: 25 },
  { name: "Masala Soda", price: 29 },
  { name: "Sugandhi Soda", price: 39 },
  { name: "Ful-jar Soda", price: 69 },
];

// Matka Beverages
const matkaBeverages = [
  { name: "Matka Salt Soda", price: 39 },
  { name: "Matka Sweet Soda", price: 39 },
  { name: "Matka Masala Soda", price: 49 },
  { name: "Matka Classic Butter Milk", price: 49 },
  { name: "Matka Masala Butter Milk", price: 49 },
  { name: "Matka Sweet Lassi", price: 49 },
];

// Summer Special (now Special Dessert Item)
const specialDessertItems = [
  { name: "Icecream With Gulabjamun", price: 59 },
];

// Mocktails
const mocktailItems = [
  { name: "Mint", price: 49 },
  { name: "Classic Lemonade", price: 49 },
  { name: "Blue Curacao", price: 59 },
  { name: "Water Melon", price: 59 },
  { name: "Strawberry", price: 59 },
  { name: "Virgin Mocktail", price: 59 },
  { name: "Kala Katta", price: 59 },
  { name: "Cranberry Spritz", price: 69 },
];

// Shakes
const shakeItems = [
  { name: "Chocolate", price: 69 },
  { name: "Butterscotch", price: 69 },
  { name: "Vanilla", price: 69 },
  { name: "Strawberry", price: 69 },
  { name: "Mango", price: 69 },
  { name: "Oreo", price: 79 },
  { name: "Nutella", price: 79 },
  { name: "Nutella Chips", price: 89 },
  { name: "Kit Kat", price: 89 },
  { name: "Kit Kat Chips", price: 99 },
  { name: "Black Current", price: 99 },
  { name: "Pista", price: 99 },
  { name: "Dry Fruit", price: 119 },
  { name: "Nuts Overloaded", price: 129 },
];

function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    table: "",
  });
  const [showIceCreamFlavors, setShowIceCreamFlavors] = useState(false);
  const [showButtermilkFlavors, setShowButtermilkFlavors] = useState(false);
  const [showLassiFlavors, setShowLassiFlavors] = useState(false);
  const [showSnacksItems, setShowSnacksItems] = useState(false);
  const [showMaggieItems, setShowMaggieItems] = useState(false);
  const [showSizzlingBrownieItems, setShowSizzlingBrownieItems] = useState(false);
  const [showComboOfferItems, setShowComboOfferItems] = useState(false);
  const [showTeaItems, setShowTeaItems] = useState(false);
  const [showSodaItems, setShowSodaItems] = useState(false);
  const [showMatkaBeverages, setShowMatkaBeverages] = useState(false);
  const [showSpecialDessertItems, setShowSpecialDessertItems] = useState(false);
  const [showMocktailItems, setShowMocktailItems] = useState(false);
  const [showShakeItems, setShowShakeItems] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Hold the logo for 5 seconds, then show the homepage
    const timer = setTimeout(() => setShowLogo(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (categoryName) => {
    setShowIceCreamFlavors(false);
    setShowButtermilkFlavors(false);
    setShowLassiFlavors(false);
    setShowSnacksItems(false);
    setShowMaggieItems(false);
    setShowSizzlingBrownieItems(false);
    setShowComboOfferItems(false);
    setShowTeaItems(false);
    setShowSodaItems(false);
    setShowMatkaBeverages(false);
    setShowSpecialDessertItems(false);
    setShowMocktailItems(false);
    setShowShakeItems(false);

    if (categoryName === "Ice-Cream") {
      setShowIceCreamFlavors(true);
    } else if (categoryName === "Butter Milk") {
      setShowButtermilkFlavors(true);
    } else if (categoryName === "Lassi") {
      setShowLassiFlavors(true);
    } else if (categoryName === "Snacks") {
      setShowSnacksItems(true);
    } else if (categoryName === "Maggie") {
      setShowMaggieItems(true);
    } else if (categoryName === "Sizzling Brownie") {
      setShowSizzlingBrownieItems(true);
    } else if (categoryName === "Combo Offer") {
      setShowComboOfferItems(true);
    } else if (categoryName === "Tea Items") {
      setShowTeaItems(true);
    } else if (categoryName === "Soda") {
      setShowSodaItems(true);
    } else if (categoryName === "Matka Beverages") {
      setShowMatkaBeverages(true);
    } else if (categoryName === "Special Dessert Item") { // <-- changed here
      setShowSpecialDessertItems(true);
    } else if (categoryName === "Mocktails") {
      setShowMocktailItems(true);
    } else if (categoryName === "Shakes") {
      setShowShakeItems(true);
    }
  };

// Handler for adding Ice Cream flavors
const handleAddIceCream = (flavor) => {
  setCart((prev) => ({
    ...prev,
    [flavor.name]: prev[flavor.name] ? prev[flavor.name] + 1 : 1,
  }));
};

// Handler for adding Snacks items
const handleAddSnacks = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};

// Handler for adding Maggie items
const handleAddMaggie = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};

// Handler for adding Sizzling Brownie items
const handleAddSizzlingBrownie = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};

// Handler for adding Combo Offer items
const handleAddComboOffer = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};

const handleAddButtermilk = (flavor) => {
  setCart((prev) => ({
    ...prev,
    [flavor.name]: prev[flavor.name] ? prev[flavor.name] + 1 : 1,
  }));
};

const handleAddLassi = (flavor) => {
  setCart((prev) => ({
    ...prev,
    [flavor.name]: prev[flavor.name] ? prev[flavor.name] + 1 : 1,
  }));
};

const handleAddTea = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};
const handleAddSoda = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};
const handleAddMatka = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};
const handleAddSummer = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};
const handleAddMocktail = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};
const handleAddShake = (item) => {
  setCart((prev) => ({
    ...prev,
    [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
  }));
};

  const handleCartClick = () => {
     setCartOpen(true);
   };

  const handleQuantity = (item, delta) => {
    setCart((prev) => {
      const qty = (prev[item] || 0) + delta;
      if (qty <= 0) {
        const { [item]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [item]: qty };
    });
  };

  const handleInputChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert(
      `Order placed!\nName: ${orderDetails.name}\nPhone: ${orderDetails.phone}\nTable: ${orderDetails.table}\nTotal: ₹${grandTotal}`
    );
    setCart({});
    setOrderDetails({ name: "", phone: "", table: "" });
    setCartOpen(false);
    setOrderPlaced(true); // Show follow/rate links
  };

  // Calculate grand total
  const grandTotal = Object.entries(cart).reduce((sum, [item, qty]) => {
    const flavor =
      iceCreamFlavors.find((f) => f.name === item) ||
      buttermilkFlavors.find((f) => f.name === item) ||
      lassiFlavors.find((f) => f.name === item) ||
      snacksItems.find((f) => f.name === item) ||
      maggieItems.find((f) => f.name === item) ||
      sizzlingBrownieItems.find((f) => f.name === item) ||
      comboOfferItems.find((f) => f.name === item) ||
      teaItems.find((f) => f.name === item) ||
      sodaItems.find((f) => f.name === item) ||
      matkaBeverages.find((f) => f.name === item) ||
      specialDessertItems.find((f) => f.name === item) ||
      mocktailItems.find((f) => f.name === item) ||
      shakeItems.find((f) => f.name === item);
    const price = flavor ? flavor.price : prices[item] || 0;
    return sum + price * qty;
  }, 0);

  return (
    <div>
      {/* Logo Overlay (no blink, just hold for 5s then fade out) */}
      {showLogo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#fff",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeOut 1s linear 4s forwards", // fade out after 4s, gone at 5s
            transition: "opacity 1s",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: 120,
              height: 120,
            }}
          />
          <style>
            {`
              @keyframes fadeOut {
                to { opacity: 0; visibility: hidden; }
              }
            `}
          </style>
        </div>
      )}
      {/* Cart Icon at the top right corner (scrolls with page) */}
      <div style={{
        position: "absolute", // <-- Change from "fixed" to "absolute"
        top: 24,
        right: 24,
        zIndex: 200
      }}>
        <button
          onClick={handleCartClick}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            outline: "none",
            position: "relative"
          }}
          aria-label="Cart"
        >
          <ShoppingCart size={36} color="#333" />
          {Object.keys(cart).length > 0 && (
            <span style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "red",
              color: "#fff",
              borderRadius: "50%",
              width: 20,
              height: 20,
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {Object.values(cart).reduce((a, b) => a + b, 0)}
            </span>
          )}
        </button>
        {/* Dropdown Cart */}
        {cartOpen && (
          <div
            style={{
              position: "absolute",
              top: 48,
              right: 0,
              width: 340,
              maxWidth: "95vw",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 12,
              boxShadow: "0 4px 24px #0001",
              zIndex: 100,
              padding: 24,
              margin: "0 auto",
            }}
            className="cart-dropdown"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0 }}>Your Cart</h3>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X size={20} />
              </button>
            </div>
            <hr />
            {Object.keys(cart).length === 0 ? (
              <div style={{ textAlign: "center", margin: "24px 0" }}>Cart is empty</div>
            ) : (
              <div>
                {/* Clear All Button */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
                  <button
                    onClick={() => setCart({})}
                    style={{
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                      padding: "6px 14px",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    Clear All
                  </button>
                </div>
                {Object.entries(cart).map(([item, qty]) => {
                  const flavor =
                    iceCreamFlavors.find((f) => f.name === item) ||
                    buttermilkFlavors.find((f) => f.name === item) ||
                    lassiFlavors.find((f) => f.name === item) ||
                    snacksItems.find((f) => f.name === item) ||
                    maggieItems.find((f) => f.name === item) ||
                    sizzlingBrownieItems.find((f) => f.name === item) ||
                    comboOfferItems.find((f) => f.name === item) ||
                    teaItems.find((f) => f.name === item) ||
                    sodaItems.find((f) => f.name === item) ||
                    matkaBeverages.find((f) => f.name === item) ||
                    specialDessertItems.find((f) => f.name === item) ||
                    mocktailItems.find((f) => f.name === item) ||
                    shakeItems.find((f) => f.name === item);
                  const price = flavor ? flavor.price : 0;
                  return (
                    <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "12px 0" }}>
                      <span>{item}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button onClick={() => handleQuantity(item, -1)} style={{ border: "none", background: "#eee", borderRadius: "50%", width: 28, height: 28, cursor: "pointer" }}>
                          <Minus size={18} />
                        </button>
                        <span>{qty}</span>
                        <button onClick={() => handleQuantity(item, 1)} style={{ border: "none", background: "#eee", borderRadius: "50%", width: 28, height: 28, cursor: "pointer" }}>
                          <Plus size={18} />
                        </button>
                      </div>
                      <span>₹{price * qty}</span>
                    </div>
                  );
                })}
                <hr />
                <div style={{ textAlign: "right", fontWeight: "bold", marginBottom: 12 }}>
                  Grand Total: ₹{grandTotal}
                </div>
                <form onSubmit={e => { e.preventDefault(); handlePlaceOrder(); }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={orderDetails.name}
                    onChange={handleInputChange}
                    required
                    style={{ width: "100%", marginBottom: 8, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={orderDetails.phone}
                    onChange={handleInputChange}
                    required
                    style={{ width: "100%", marginBottom: 8, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  />
                  <input
                    type="text"
                    name="table"
                    placeholder="Table Number"
                    value={orderDetails.table}
                    onChange={handleInputChange}
                    required
                    style={{ width: "100%", marginBottom: 12, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      background: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                      padding: 10,
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    Place Order
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Title at the top */}
      <div style={{ textAlign: "center", marginTop: 24, marginBottom: 8 }}>
        <span style={{ fontWeight: "bold", fontSize: 26, letterSpacing: 2 }}>
          MOCKTAIL LOUNGE
        </span>
        <div style={{ fontWeight: "bold", fontSize: 14, marginTop: 4 }}>
          More than Mocktail...
        </div>
      </div>
      {/* Menu Categories */}
      <h1 style={{ textAlign: "center", margin: "32px 0 24px 0" }}>Menu Categories</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginTop: 20 }}>
        {showIceCreamFlavors ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Ice-Cream Flavors</h2>
            {iceCreamFlavors.map((flavor) => (
              <div key={flavor.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{flavor.name} <span style={{ color: "#888" }}>₹{flavor.price}</span></span>
                <button
                  onClick={() => handleAddIceCream(flavor)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowIceCreamFlavors(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showButtermilkFlavors ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Buttermilk Flavors</h2>
            {buttermilkFlavors.map((flavor) => (
              <div key={flavor.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{flavor.name} <span style={{ color: "#888" }}>₹{flavor.price}</span></span>
                <button
                  onClick={() => handleAddButtermilk(flavor)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowButtermilkFlavors(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showLassiFlavors ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Lassi Flavors</h2>
            {lassiFlavors.map((flavor) => (
              <div key={flavor.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{flavor.name} <span style={{ color: "#888" }}>₹{flavor.price}</span></span>
                <button
                  onClick={() => handleAddLassi(flavor)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowLassiFlavors(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showSnacksItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Snacks</h2>
            {snacksItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddSnacks(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowSnacksItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showMaggieItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Maggie</h2>
            {maggieItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddMaggie(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowMaggieItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showSizzlingBrownieItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Sizzling Brownie</h2>
            {sizzlingBrownieItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddSizzlingBrownie(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowSizzlingBrownieItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showComboOfferItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Combo Offers</h2>
            {comboOfferItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddComboOffer(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowComboOfferItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showTeaItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Tea Items</h2>
            {teaItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddTea(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowTeaItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showSodaItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Soda</h2>
            {sodaItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddSoda(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowSodaItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showMatkaBeverages ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Matka Beverages</h2>
            {matkaBeverages.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddMatka(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowMatkaBeverages(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showSpecialDessertItems ? ( // <-- changed here
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Special Dessert Item</h2>
            {specialDessertItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddSummer(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowSpecialDessertItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showMocktailItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Mocktails</h2>
            {mocktailItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddMocktail(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowMocktailItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : showShakeItems ? (
          <div style={{ width: "100%", maxWidth: 320, padding: "8px 0" }}>
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Shakes</h2>
            {shakeItems.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: 6, fontSize: 15 }}>
                <span>{item.name} <span style={{ color: "#888" }}>₹{item.price}</span></span>
                <button
                  onClick={() => handleAddShake(item)}
                  style={{
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowShakeItems(false)}
              style={{
                marginTop: 12,
                background: "#eee",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Back to Categories
            </button>
          </div>
        ) : (
          categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              style={{
                cursor: "pointer",
                textAlign: "center",
                width: 140,
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 16,
                boxShadow: "0 2px 8px #eee",
                background: "#fff",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{ width: 120, height: 120, objectFit: "contain", marginBottom: 8 }}
              />
              <div style={{ fontWeight: "bold" }}>{cat.name}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;