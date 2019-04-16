import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { StoreContext } from "../context/storeContext";

const WishListWrapper = ({ title }) => {
  // state
  const store = React.useContext(StoreContext);

  // currying is a way to pass parameters to an eventhandler
  const handleRemoveProduct = product => e => {
    store.removeProductFromList(product);
  };

  return (
    <Paper style={{ margin: 24, padding: 8 }}>
      <h2 style={{ marginLeft: 16 }}>{title}</h2>
      <List>
        {store.wishList.map((item, i) => {
          return (
            <ListItem style={{ marginBottom: 8 }} key={i}>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <Button variant="outlined" onClick={handleRemoveProduct(item)}>
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default WishListWrapper;
