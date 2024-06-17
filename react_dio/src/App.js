import React, { useState } from "react";
import Button from "./components/Button";

function App({ nome }) {
  const [count, setCount] = useState(0);
  //Definindo os values das variaveis como 0, inicializa como 0
  const increment = () => {
    setCount(count + 1); //Definindo o state do counter //Ar.Func
  };
  const decrement = () => {
    setCount(count - 1); //Definindo o state do counter //Ar.Func
  };

  return (
    //Utilizar dois ou mais elementos jsx usa o "fragment" <> & </>
    <>
      <div>This is our counter Application</div>
      <div className="flex justify-center ">
        <button onClick={decrement}>-</button>
        <span>Clicks {count}</span>
        <button onClick={increment}>+</button>
      </div>
      <h1>Bem-Vindo {nome}</h1>
    </>
  );
}

export default App;
