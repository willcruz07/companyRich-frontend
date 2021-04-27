import styled from "styled-components";

export const ContainerAction = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 8px 0 8px;

  height: 64px;

  button {
    font-size: 16px;
    font-weight: 800;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    height: 40px;
    width: 128px;

    border-radius: 32px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
