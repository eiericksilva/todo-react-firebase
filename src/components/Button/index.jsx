import styled from "styled-components";
import { StyledButton } from "./Button";

const Button = ({ titleButton, variant, onClick, todo }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} todo={todo}>
      {titleButton}
    </StyledButton>
  );
};

export default Button;
