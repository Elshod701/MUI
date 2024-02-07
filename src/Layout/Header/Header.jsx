import React from "react";
import logo from "../../assets/icons/logo.svg";
import { Container, Stack } from "@mui/material";
import Select from "../../Components/Select/Select";
import Input from "../../Components/Input/Input";
const Header = () => {
  return (
    <Container>
      <Stack
        padding={"20px 0"}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <img src={logo} alt="#" />
        <Select />
        <Input />
      </Stack>
    </Container>
  );
};

export default Header;
