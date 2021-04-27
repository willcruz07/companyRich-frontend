import styled from "styled-components";

export const Container = styled.form`
  padding: 24px;

  h2 {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 24px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0 8px;

    height: 40px;
    border-radius: 4px;

    border: 1px solid ${props => props.theme.colors.gray};

    & + select {
      cursor: pointer;
    }
    margin-bottom: 8px;
  }

  button[type="submit"] {
    width: 100%;

    margin-top: 16px;

    border-radius: 32px;
    height: 48px;

    font-weight: 800;

    font-size: 18px;
    color: ${props => props.theme.colors.secondary};

    background: ${props => props.theme.colors.primary};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  button {
    height: 18px;
    width: 18px;

    font-weight: 700;

    background-color: ${props => props.theme.colors.white};
  }
`;
