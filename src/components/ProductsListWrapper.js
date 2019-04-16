import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { StoreContext } from "../context/storeContext";

const ProductsListWrapper = ({ title }) => {
  // state
  const store = React.useContext(StoreContext);

  // seems its called currying
  const handleAddProductToList = name => e => {
    store.addProductToList(name);
  };

  return (
    <Paper style={{ margin: 24, padding: 8 }}>
      <h2 style={{ marginLeft: 16 }}>{title}</h2>
      <List>
        {store.products.map((item, i) => {
          return (
            <ListItem style={{ marginBottom: 8 }} key={i}>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  onClick={handleAddProductToList(item)}
                >
                  Add
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default ProductsListWrapper;
