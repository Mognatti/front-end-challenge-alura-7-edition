import { useState } from "react";
import {
  Cadastre,
  NewsLetterButton,
  NewsLetterContainer,
  NewsLetterContent,
  NewsLetterInput,
  NewsLetterText,
} from "../../../../styles/StyledComponents";
import NewsLetterModal from "./NewsLetterModal";

export default function NewsLetter() {
  const [showModal, setShowModal] = useState(false);
  return (
    <NewsLetterContainer>
      <NewsLetterContent>
        <NewsLetterText>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <Cadastre>Cadastre-se!</Cadastre>
        </NewsLetterText>
        <NewsLetterInput placeholder="digite seu email..." />
        <NewsLetterButton onClick={() => setShowModal(true)}>
          Enviar
        </NewsLetterButton>
        {showModal && <NewsLetterModal {...{ setShowModal }}></NewsLetterModal>}
      </NewsLetterContent>
    </NewsLetterContainer>
  );
}
