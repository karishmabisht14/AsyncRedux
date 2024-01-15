import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../redux/showCartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
