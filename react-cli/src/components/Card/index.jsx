import { FiThumbsUp } from "react-icons/fi";
import React from "react";

import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://artoftesting.com/wp-content/uploads/2021/04/what-is-a-webpage.png" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/168785661?s=96&v=4" />
          <div>
            <h4>Leonardo Kremer</h4>
            <p>Há 7 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />
            10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
