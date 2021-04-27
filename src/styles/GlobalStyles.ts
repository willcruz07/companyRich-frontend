import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {    
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }

  *, input, textarea, button {
    border: 0;
    outline: 0;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgb(0, 0, 0, 0.5);

    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 2;
  }

  .react-modal-content {
    width: 100%;
    max-width: 600px;

    background: ${"#F7F9FC"};

    border-radius: 8px;

    position: relative;

  }
`;
