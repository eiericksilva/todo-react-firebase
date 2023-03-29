import styled from "styled-components";
import { StyledButton } from "./Button";

const Button = ({ title, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
