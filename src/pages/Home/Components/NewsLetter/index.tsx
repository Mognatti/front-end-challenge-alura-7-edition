import { useState } from "react";
import * as S from "../../../../styles/StyledComponents";
import NewsLetterModal from "./NewsLetterModal";

const CTAText =
  "Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? ";
export default function NewsLetter() {
  const [showModal, setShowModal] = useState(false);
  return (
    <S.NewsLetterContainer>
      <S.NewsLetterContent>
        <S.NewsLetterText>
          {CTAText}
          <S.Cadastre>Cadastre-se!</S.Cadastre>
        </S.NewsLetterText>
        <S.NewsLetterInput placeholder="digite seu email..." />
        <S.NewsLetterButton onClick={() => setShowModal(true)}>
          Enviar
        </S.NewsLetterButton>
        {showModal && <NewsLetterModal {...{ setShowModal }}></NewsLetterModal>}
      </S.NewsLetterContent>
    </S.NewsLetterContainer>
  );
}
