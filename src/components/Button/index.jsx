import styled from "styled-components";
import { StyledButton } from "./Button";

const Button = ({ titleButton, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {titleButton}
    </StyledButton>
  );
};

export default Button;
