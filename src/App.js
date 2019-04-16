import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProductsListWrapper from "./components/ProductsListWrapper";
import WishListWrapper from "./components/WishListWrapper";

import { StoreContext } from "./context/storeContext";

const App = props => {
  // the 2 pieces of state below are going to feed the context
  const [products, setProducts] = useState([
    { id: 1, name: "Tooth Brush" },
    { id: 2, name: "Programming Book" },
    { id: 3, name: "Shaving Cream" },
    { id: 4, name: "Pillow" },
    { id: 5, name: "Sunglasses" }
  ]);
  const [wishList, setWishList] = useState([]);

  const addProductToList = product => {
    console.log("adding a ", product);
    setWishList([...wishList, product]);
    setProducts(products.filter(item => item.name !== product.name));
  };
  const removeProductFromList = product => {
    console.log("removing ", product);
    setProducts([...products, product]);
    setWishList(wishList.filter(item => item.name !== product.name));
  };

  return (
    <div className="App">
      <StoreContext.Provider
        value={{
          products,
          wishList,
          addProductToList,
          removeProductFromList
        }}
      >
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <ProductsListWrapper title="Products" />
          </Grid>
          <Grid item xs={6}>
            <WishListWrapper title="Wishlist" />
          </Grid>
        </Grid>
      </StoreContext.Provider>
    </div>
  );
};

export default App;
