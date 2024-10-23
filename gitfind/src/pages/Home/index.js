import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import { useState } from "react";
import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    console.log(newUser);

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="conteudo">
        <img src={background} alt="BackgroundImg" className="background"></img>
        <div className="info">
          <div>
            <input
              name="usuario"
              placeholder="@username"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            ></input>
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  alt="imgProfile"
                  className="profile"
                ></img>
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr></hr>
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <h4 className="repositorios">Repositórios</h4>
              {repos.map((repo) => (
                <ItemList
                  title={repo.name}
                  description={repo.description}
                ></ItemList>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
