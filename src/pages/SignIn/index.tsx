import React from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import LogoCompany from "../../assets/company.svg";

import { Container, ContainerForm, ContainerLogo } from "./styles";
import { useAuth } from "../../hooks/auth";

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = useAuth();

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    signIn(email, password);
  };

  return (
    <Container>
      <ContainerForm onSubmit={handleSubmitForm}>
        <ContainerLogo>
          <img src={LogoCompany} alt="Logo company" />
          <h1>Company Rich</h1>
        </ContainerLogo>
        <Input
          placeholder="E-mail"
          type="email"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit"> Acessar</Button>
      </ContainerForm>
    </Container>
  );
};

export default SignIn;
