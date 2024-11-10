import React from "react";
import { ButtonContainer } from "./styles"

//Pode receber props dentro do () do elemento, colocar dentro de chaves
const Button = ({title, variant="primary", onClick}) => {
    return(
        <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
    )
}


export default Button;