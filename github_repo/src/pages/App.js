import { useState } from "react";
import imgLogo from "../assets/github-mark-white.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
//api
import { api } from "../services/api";
import { AxiosError } from "axios";

function App() {
  //Armazenar Repositórios
  const [respos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepos = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = respos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
      } else {
        alert("repositorio repetido");
      }
    } else {
      alert("Repositório não encontrado");
    }
  };

  return (
    <Container>
      <img src={imgLogo} alt="logo-github" width={72} height={72}></img>
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      ></Input>
      <Button onClick={handleSearchRepos}></Button>
      {respos.map((repo) => (
        <ItemRepo repo={repo}></ItemRepo>
      ))}
    </Container>
  );
}

export default App;
