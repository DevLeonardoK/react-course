import React from "react";
import {BuscarInputContainer, Column, Row,Container, Input, Menu, MenuRight, UserPicture, Wrapper} from "./styles"

import Button from "../Button"
import LogoDio from "..//..//assets/logo-dio.png"


const Header = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <img src={LogoDio} alt="Logo da Dio"></img>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."></Input>
                        </BuscarInputContainer>
                        <Menu>
                            Live Code
                        </Menu>
                        <Menu>Global</Menu>
                    </Row>
                    <Row>
                        <MenuRight href="/">
                            Home
                        </MenuRight>
                        <Button title="Entrar"></Button>
                        <Button title="Cadatrar"></Button>
                    </Row>
                </Container>
            </Wrapper>

        </>
    )
}

export default Header;