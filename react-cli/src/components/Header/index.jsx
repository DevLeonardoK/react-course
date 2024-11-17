import React from "react";
import {
  BuscarInputContainer,
  Column,
  Row,
  Container,
  Input,
  Menu,
  MenuRight,
  UserPicture,
  Wrapper,
} from "./styles";

import Button from "../Button";
import LogoDio from "..//..//assets/logo-dio.png";

const Header = ({ autenticado }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img src={LogoDio} alt="Logo da Dio"></img>
            {autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar..."></Input>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
            {autenticado ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/168785661?s=96&v=4"></UserPicture>
            ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar"></Button>
                <Button title="Cadatrar"></Button>
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
