import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;

  width: 400px;

  padding: 0 8px;

  border-radius: 4px;

  border: 1px solid ${"#ccc"};

  background: ${props => props.theme.colors.white};
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;

  color: coral;
`;

export const Input = styled.input`
  width: 100%;

  margin: 4px;

  padding: 8px;

  background-color: ${props => props.theme.colors.white};
`;
