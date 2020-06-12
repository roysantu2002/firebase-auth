import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Signup from "./UI/Auth/Signup";
import Header from "./UI/Header";
import theme from "./UI/AppTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Signup />
    </ThemeProvider>
  );
}

export default App;
