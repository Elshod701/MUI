import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Button } from "@mui/material";
const App = () => {
  return (
    <>
      <Header />
      <Button variant="contained">Click</Button>
      <Button variant="text">Click</Button>
      <Button variant="outlined">Click</Button>
      <Footer />
    </>
  );
};

export default App;
