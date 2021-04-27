import React, { InputHTMLAttributes } from "react";
import iconSearchImg from "../../assets/search.svg";

import { Container, Input, Icon } from "./styles";

type TInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputSearch: React.FC<TInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <Icon src={iconSearchImg} alt="icon search" />
      <Input {...rest} />
    </Container>
  );
};

export default InputSearch;
