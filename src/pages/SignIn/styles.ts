import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.white};

  height: 100vh;
`;

export const ContainerForm = styled.form`
  display: flex;

  flex-direction: column;
  justify-content: center;

  padding: 24px;

  width: 400px;
  height: 400px;

  border-radius: 8px;

  background-color: ${props => props.theme.colors.primary};
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  h1 {
    color: ${props => props.theme.colors.tertiary};
    margin-left: 8px;
  }

  img {
    height: 80px;
    width: 80px;
  }
`;
