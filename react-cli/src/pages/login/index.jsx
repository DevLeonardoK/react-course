import Button from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  ErrorText,
} from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email não é valido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No minimo 3 caractertes")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors }, //formState = estado do formulario
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(errors);

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválido");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  const handleClickFeed = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors?.email?.message}
                control={control}
                name="email"
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
              ></Input>
              <Input
                control={control}
                errorMessage={errors?.password?.message}
                name="password"
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              ></Input>
              <Button title="Entrar" variant="secondary" type="submit"></Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
