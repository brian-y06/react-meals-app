import React, { useContext } from "react";

import classes from "./HeaderCardButton.module.css";
import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.amount}</span>
    </button>
  );
};

export default HeaderCartButton;
