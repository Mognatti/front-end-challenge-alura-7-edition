import * as S from "../../../../../../styles/StyledComponents";
import { ModalProps } from "../../../interface";
import ColorOptions from "./components/ColorOptions";
import SizeOptions from "./components/SizeOptions";

export default function Modal({ item, closeModal }: ModalProps) {
  const modalRadioList = [
    <S.ModalSelectRadio key="1">
      <S.ModalSelectTitle> Cores: </S.ModalSelectTitle>
      <S.ModalRadioList>
        {item.colorOptions.map((color) => (
          <ColorOptions key={color.id} {...color} />
        ))}
      </S.ModalRadioList>
    </S.ModalSelectRadio>,
    <S.ModalSelectRadio key="2">
      <S.ModalSelectTitle> Tamanho: </S.ModalSelectTitle>
      <S.ModalRadioList>
        {item.size.map((size) => (
          <SizeOptions key={size} size={size} />
        ))}
      </S.ModalRadioList>
    </S.ModalSelectRadio>,
  ];

  return (
    <S.Background>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalHeaderIcon size="25" />
          <S.ModalHeaderTitle>
            Confira Detalhes sobre o Produto
          </S.ModalHeaderTitle>
          <S.ModalHeaderButtonContainer>
            <S.ModalCloseButton size="20" onClick={() => closeModal()} />
          </S.ModalHeaderButtonContainer>
        </S.ModalHeader>
        <S.ModalContent>
          <S.ModalImageContainer className="image">
            <S.ModalImage src={item.srcDesktop} alt={item.name} />
          </S.ModalImageContainer>
          <S.ModalTextInfo>
            <S.ModalTitle>{item.name}</S.ModalTitle>
            <S.ModalDescription>{item.description}</S.ModalDescription>
            <S.ModalPrice>{item.price}</S.ModalPrice>
            <S.ModalProvider>Vendido e entregue por alguém 😉</S.ModalProvider>
            {modalRadioList.map((list) => list)}
            <S.ModalButtonContainer className="sacola">
              <S.ModalButton> Adicionar à sacola </S.ModalButton>
            </S.ModalButtonContainer>
          </S.ModalTextInfo>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Background>
  );
}
