import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={24}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Let’s build something")}</Large>
              <Para>
                {t(`Have a project in mind? Let’s connect.`)}
              </Para>
              <a href="mailto:hello@example.com">
                <Chat>{t(`Let's Connect`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <Title>{t("Services")}</Title>
              <Large to="/">{t("Full-Stack Development")}</Large>
              <Large to="/">{t("Frontend Architecture")}</Large>
              <Large to="/">{t("API Development")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Empty />
              <Large to="/">{t("Web Applications")}</Large>
              <Large to="/">{t("UI/UX Focus")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={24}>
              <Empty />
              <Language>{t("Location")}</Language>
              <Para>India</Para>
              <Para>Available for remote work</Para>
              <Para>Open to opportunities</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <Title>{t("Quick Links")}</Title>
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Projects")}</Large>
              <Large to="/">{t("Skills")}</Large>
              <Large to="/">{t("Contact")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              > 
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);