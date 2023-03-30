import styled from "styled-components";
import { StyledButton } from "./Button";

const Button = ({ titleButton, variant, onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {titleButton}
    </StyledButton>
  );
};

export default Button;
