import React from "react";
import { Button, Container, UserEmail } from "./Header";
import { useNavigate } from "react-router-dom";

const Header = ({ user, logout }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Container>
      <UserEmail>{user && user.email}</UserEmail>
      <Button onClick={handleLogout}>Sair</Button>
    </Container>
  );
};

export default Header;
