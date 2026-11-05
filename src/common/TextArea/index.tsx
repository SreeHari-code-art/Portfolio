import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange, t }: InputProps) => {
  const translate = (value: string) => String(t(value) ?? value);

  return (
    <StyledContainer>
      <Label htmlFor={name}>{translate(name)}</Label>
      <StyledTextArea
        placeholder={translate(placeholder)}
        id={name}
        name={name}
        onChange={onChange}
      />
    </StyledContainer>
  );
};

export default withTranslation()(TextArea);