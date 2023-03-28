import styled from "styled-components";

const Button = ({ title, type }) => {
  let background, color, borderColor;

  switch (type) {
    case "add":
      background = "#4caf50";
      color = "#fff";
      borderColor = "#4caf50";
      break;

    case "upd":
      background = "#2196f3";
      color = "#fff";
      borderColor = "#2196f3";
      break;

    case "del":
      background = "#f44336";
      color = "#fff";
      borderColor = "#f44336";
      break;

    default:
      background = "transparent";
      color = "#000";
      borderColor = "#000";
  }

  const StyledButton = styled.button`
    background-color: ${background};
    color: ${color};
    border: 1px solid ${borderColor};
    height: auto;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.1s ease;
    margin: 0 10px;

    &:hover {
      background-color: ${color};
      color: ${background};
    }
  `;

  return <StyledButton>{title}</StyledButton>;
};

export default Button;
