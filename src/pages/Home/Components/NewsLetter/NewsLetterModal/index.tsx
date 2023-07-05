import * as S from "../../../../../styles/StyledComponents";
import { NewsLetterModalProps } from "../../interface";

export default function NewsLetterModal({
  setShowModal,
}: NewsLetterModalProps) {
  return (
    <S.Background>
      <S.NewsLetterModalContainer>
        <S.ModalHeader>
          <S.ModalHeaderIcon size="25" />
          <S.ModalHeaderTitle>
            E-mail cadastrado com sucesso!
          </S.ModalHeaderTitle>
          <S.ModalHeaderButtonContainer>
            <S.ModalCloseButton onClick={() => setShowModal(false)} size="25" />
          </S.ModalHeaderButtonContainer>
        </S.ModalHeader>
        <S.NewsLetterModalContent>
          <S.NewsLetterModalText>
            Em breve você receberá novidades exclusivas da Meteora.
          </S.NewsLetterModalText>
        </S.NewsLetterModalContent>
      </S.NewsLetterModalContainer>
    </S.Background>
  );
}
