import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700px;
  font-size: 32px;
  width: 328px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;
`;

export const TitleHighlight = styled.span`
  color: #e4104d;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400px;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
  color: #ffffff;
`;
