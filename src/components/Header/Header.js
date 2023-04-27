import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 30px 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #90b7bc;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: var(--quantum);

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const UserEmail = styled.h4`
  font-size: 14px;
`;
export const Button = styled.button`
  color: #001e3c;
  border-radius: 20px;
  background-color: #f7d399;
  height: 30px;
  width: 120px;
  border-radius: 20px;

  &:hover {
    cursor: pointer;

    background-color: #001e3c;
    color: #f7d399;
  }
`;
