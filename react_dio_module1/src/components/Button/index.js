//Estrutura do component
//Versão 17 do react não precisa mais fazer esse import do react

import React from "react";

//Export default ==> (default) pois queremos outros lugares consigam pegar esse Button
export default function Button({ title, onClick, value }) {
  //Esse {title} é como se fosse:
  // ---export default function Button(props)
  //  ----const {title} = props
  //Se chama desestruturação
  return (
    <>
      <button onClick={onClick}>{value}</button>
      <h1>{title}</h1>
    </>
  );
}
