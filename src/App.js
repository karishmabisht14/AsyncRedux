import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, useState } from "react";

let initial = true;

function App() {
  const showCart = useSelector((state) => state.showCart.cartIsShown);
  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setError("Sending Request");
      const response = await fetch(
        "https://async-redux-d1e1b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.ok) {
        setError("Request is successful");
      } else {
        setError("Request is failed!!!");
      }
    }
    if (!initial) {
      fetchData();
    }
    initial = false;
  }, [cart]);

  return (
    <Layout>
      {error.length !== 0 && <h3 className="Error">{error}</h3>}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
