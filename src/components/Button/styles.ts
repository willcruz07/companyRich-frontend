import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;

  margin: 8px 0;
  padding: 10px;

  border-radius: 5px;

  font-weight: bold;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.tertiary};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.7);
  }
`;
