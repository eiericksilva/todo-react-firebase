import React from "react";
import { Button, Container, Title, UserEmail } from "./Header";
import { useNavigate } from "react-router-dom";

const Header = ({ user, logout }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Container>
      <Title>Todo ReactJS + Firebase</Title>
      <UserEmail>Email:{user && user.email}</UserEmail>
      <Button onClick={handleLogout}>Sair</Button>
    </Container>
  );
};

export default Header;
