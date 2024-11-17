import React from "react";
import { IconContainer, InputText, InputContainer } from "./styles";

function Input({ leftIcon, name, ...rest }) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <InputText {...rest}></InputText>
      </InputContainer>
    </>
  );
}
export { Input };
