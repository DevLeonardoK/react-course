import { useState, useEffect, useMemo, useCallback } from "react";

const UseState = () => {
  const [age, setAge] = useState(26);
  const [name, setName] = useState("Leonardo");
  //useState precisa de duas variaveis, "valor", "setValor"

  const handleChangeName = useCallback(() => {
    // const nomeAtual = name;
    console.log(name);
    setName(
      (prev) => (prev === "Leonardo" ? "José" : "Leonardo")
      //Se o valor for "Leonardo" mudar para "José", senão "Leonardo"
    );
  }, [name]);

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    setAge(
      (prev) => (prev === 26 ? 32 : 26)
      //Se o valor for "26" mudar para "32", senão "26"
    );
  }, [age]);

  // useEffect(() => {
  //   alert("renderizado");
  // }, [age]); //array de dependência, no exemplo do código, quando o valor "name" for alterado, o useEffect vai ativar
  // //Gerenciar ações de components

  // const calculo = useMemo(() => {
  //   console.log("Calculou", age);
  //   return 10 + age;
  // }, [age]);
  // console.log("carregou", calculo);

  return (
    <div>
      <p>Idade:{age}</p>
      <br />
      <p>Nome:{name}</p>
      <button onClick={handleChangeName}>Trocar nome</button>
      <br />
      <button onClick={handleChangeAge}>Trocar idade</button>
    </div>
  );
};

export { UseState };
