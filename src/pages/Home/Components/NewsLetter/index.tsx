import { useState, useRef } from "react";
import * as S from "../../../../styles/StyledComponents";
import NewsLetterModal from "./NewsLetterModal";

const CTAText =
  "Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? ";
export default function NewsLetter() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const alertMessage = "Insira um email válido! Ex: exemplo@email.com";
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const inputEmail = inputRef.current!.value;
    if (emailRegex.test(inputEmail)) {
      setShowModal(true);
    } else {
      alert(alertMessage);
    }
  }
  return (
    <S.NewsLetterContainer>
      <S.NewsLetterContent>
        <S.NewsLetterText>
          {CTAText}
          <S.Cadastre>Cadastre-se!</S.Cadastre>
        </S.NewsLetterText>
        <S.NewsLetterInput
          ref={inputRef}
          type="email"
          placeholder="digite seu email..."
        />
        <S.NewsLetterButton onClick={(e) => handleClick(e)}>
          Enviar
        </S.NewsLetterButton>
        {showModal && <NewsLetterModal {...{ setShowModal }}></NewsLetterModal>}
      </S.NewsLetterContent>
    </S.NewsLetterContainer>
  );
}
