import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="conteudo">
        <img src={background} alt="BackgroundImg" className="background"></img>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"></input>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/168785661?v=4"
              alt="imgProfile"
              className="profile"
            ></img>
            <div>
              <h3>DevLeonardoK</h3>
              <span>@DevLeonardoK</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr></hr>
          <div>
            <h4 className="repositorios">Repositórios</h4>
            <ItemList title="Test1" description="testando"></ItemList>
            <ItemList title="Test1" description="testando"></ItemList>
            <ItemList title="Test1" description="testando"></ItemList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
