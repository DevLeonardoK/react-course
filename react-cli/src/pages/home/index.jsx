import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Olá HOME</h1>
      <Link to="/login">
        <button>Fazer Login</button>
      </Link>
    </>
  );
};

export default Home;
