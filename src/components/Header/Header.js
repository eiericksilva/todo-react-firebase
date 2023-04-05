import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const UserEmail = styled.h4``;
export const Button = styled.button`
  color: #001e3c;
  border-radius: 20px;
  background-color: #f7d399;
  height: 30px;
  width: 120px;
  border-radius: 20px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;

    background-color: #001e3c;
    color: #f7d399;
  }
`;
