import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${props => props.theme.colors.tertiary};

  box-shadow: 1px 1px 4px ${"#ccc"};

  height: 64px;

  align-items: center;
  justify-content: space-between;

  padding: 0px 16px 0 24px;

  z-index: 1;
`;

export const ContainerModal = styled.div`
  padding: 24px;
  h2,
  h4 {
    margin: 8px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;

  align-items: center;

  h2 {
    margin-left: 8px;
    color: ${props => props.theme.colors.secondary};
  }

  img {
    height: 48px;
    width: 48px;
  }
`;

export const InputSearch = styled.input`
  border: 1px solid;
`;

export const ContainerUser = styled.div`
  display: flex;

  align-items: center;
`;

export const TitleUser = styled.h4`
  margin-left: 8px;
`;
