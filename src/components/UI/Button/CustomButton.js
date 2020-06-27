import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    margin: 5,
    padding: 2,
    width: 180,
    fontSize: 10,
    fontWeight: "bold",
    
  }
});

function CustomButton(props) {
  return <Button variant="contained" color="primary" {...props} />;
}

export default CustomButton;

