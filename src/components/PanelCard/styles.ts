import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  flex-grow: 1;

  box-shadow: 1px 1px 4px ${"#ccc"};

  background-color: ${props => props.theme.colors.white};

  border-radius: 8px;

  margin: 0 16px 16px 16px;

  padding: 16px;
`;

export const ContainerModal = styled.div`
  padding: 24px;
  h2,
  h4 {
    margin: 8px;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: flex-end;
`;
