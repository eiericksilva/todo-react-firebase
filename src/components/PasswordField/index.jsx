import React, { useState } from "react";
import { Container, Input } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordField = ({ className, placeholder, value, onChange }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <Container>
      <Input
        className={className}
        type={passwordIsVisible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {passwordIsVisible ? (
        <AiOutlineEye onClick={() => setPasswordIsVisible(false)} />
      ) : (
        <AiOutlineEyeInvisible onClick={() => setPasswordIsVisible(true)} />
      )}
    </Container>
  );
};

export default PasswordField;
