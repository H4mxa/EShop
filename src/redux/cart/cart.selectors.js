import { createSelector } from "reselect";

// input selector
const selectCart = (state) => state.cart;

// output selector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems // return cartItems
);

export const selectItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  )
);
