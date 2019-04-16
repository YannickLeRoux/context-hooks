import React from "react";

export const StoreContext = React.createContext({
  products: [],
  wishList: [],
  addProductToList: name => {},
  removeProductFromList: id => {}
});
