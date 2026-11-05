import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ProfileImage = styled("img")`
  display: block;
  width: min(100%, 440px);
  height: auto;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;

  > .ant-row {
    width: 100%;
    justify-content: center;
  }

  > .ant-row > .ant-col {
    text-align: center;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
`;