import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t }: InputProps) => {
  const translate = (value: string) => String(t(value) ?? value);

  return (
    <Container>
      <Label htmlFor={name}>{translate(name)}</Label>
      <StyledInput
        placeholder={translate(placeholder)}
        name={name}
        id={name}
        onChange={onChange}
      />
    </Container>
  );
};

export default withTranslation()(Input);