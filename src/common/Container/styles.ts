import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 40px;
  border-top: ${(p) => (p.border ? "1px solid var(--border-color)" : "")};

  @media only screen and (max-width: 1024px) {
    padding: 0 32px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 414px) {
    padding: 0 16px;
  }
`;