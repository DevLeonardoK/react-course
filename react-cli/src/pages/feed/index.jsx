import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            nome="Leonardo Kremer"
            image="https://avatars.githubusercontent.com/u/168785661?s=96&v=4"
          />
          <UserInfo
            percentual={22}
            nome="Leonardo Kremer"
            image="https://avatars.githubusercontent.com/u/168785661?s=96&v=4"
          />
          <UserInfo
            percentual={85}
            nome="Leonardo Kremer"
            image="https://avatars.githubusercontent.com/u/168785661?s=96&v=4"
          />
          <UserInfo
            percentual={40}
            nome="Leonardo Kremer"
            image="https://avatars.githubusercontent.com/u/168785661?s=96&v=4"
          />
          <UserInfo
            percentual={15}
            nome="Leonardo Kremer"
            image="https://avatars.githubusercontent.com/u/168785661?s=96&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
