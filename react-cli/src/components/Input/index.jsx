import React from "react";
import { IconContainer, InputText, InputContainer, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

function Input({ control, leftIcon, errorMessage, name, ...rest }) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}
export { Input };
