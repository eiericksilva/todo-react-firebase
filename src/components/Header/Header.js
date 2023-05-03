import styled from "styled-components";
import Banner from "../../assets/todobanner.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 350px;
  padding: 30px 20px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  color: var(--quantum);

  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  gap: 10px;
`;
export const UserEmail = styled.h4`
  font-size: 18px;
  letter-spacing: 5px;
  font-weight: 400;
`;
export const Button = styled.button`
  color: white;
  background-color: #55696c;
  height: 30px;
  width: 120px;
  border-radius: 20px;
  border: none;

  &:hover {
    cursor: pointer;

    background-color: white;
    color: #55696c;
  }
`;
