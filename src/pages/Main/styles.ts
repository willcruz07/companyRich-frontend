import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  background-color: ${props => props.theme.colors.secondary};
`;
