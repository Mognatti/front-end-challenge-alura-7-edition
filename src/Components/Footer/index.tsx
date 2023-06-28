import { FooterContainer, FooterContent } from "../../styles/StyledComponents";

const content =
  "2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.";
export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>{content}</FooterContent>
    </FooterContainer>
  );
}
