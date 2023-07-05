import {
  Cadastre,
  NewsLetterButton,
  NewsLetterContainer,
  NewsLetterContent,
  NewsLetterInput,
  NewsLetterText,
} from "../../../../styles/StyledComponents";

export default function NewsLetter() {
  return (
    <NewsLetterContainer>
      <NewsLetterContent>
        <NewsLetterText>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <Cadastre>Cadastre-se!</Cadastre>
        </NewsLetterText>
        <NewsLetterInput placeholder="digite seu email..." />
        <NewsLetterButton>Enviar</NewsLetterButton>
      </NewsLetterContent>
    </NewsLetterContainer>
  );
}
