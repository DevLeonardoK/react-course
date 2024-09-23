// const App = () => {
//   const array = [1,2,3,4,5,6,7,8,9];
//   return (
//     <div className="App">
//       <h1>Hello Curso</h1>
//       {array.map((item)=>(
//           <p>{item} * 5 = {item * 5}</p>
//       ))}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
const App = () => {
  const [usuario, setUsuario] = useState("");
  const [count, setCount] = useState();
  const [usuarios, setUsuarios] = useState(["Pablo", "Jose", "Manoel"]);

  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  };

  useEffect(() => {
    setCount(usuarios.length);
  }, [usuarios]); //se esse array mudar, ele executa a ação

  useEffect(() => {
    setTimeout(() => {
      setUsuarios([...usuarios, "Ismael"]); //Concatenar informações, manter as informações = ...
    }, 3000);
  }, []);

  return (
    <div className="App">
      <h1>Hello DIO!</h1>
      <div>
        <input
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        ></input>
        <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <p>Contagem: {count}</p>
      <hr />
      {usuarios.map(
        (
          item //return = '()'
        ) => (
          <p>{item}</p>
        )
      )}
    </div>
  );
};

export default App;
