import * as S from "../../../../../../styles/StyledComponents";
import { ModalProps } from "../../../interface";
import ColorOptions from "./components/ColorOptions";
import SizeOptions from "./components/SizeOptions";

export default function Modal({
  modalItem,
  closeModal,
  windowWidth,
  tablet,
  mobile,
}: ModalProps) {
  const modalRadioList = [
    <S.ModalSelectRadio key="1">
      <S.ModalSelectTitle> Cores: </S.ModalSelectTitle>
      <S.ModalRadioList>
        {modalItem.colorOptions.map((color) => (
          <ColorOptions key={color.id} {...color} />
        ))}
      </S.ModalRadioList>
    </S.ModalSelectRadio>,
    <S.ModalSelectRadio key="2">
      <S.ModalSelectTitle> Tamanho: </S.ModalSelectTitle>
      <S.ModalRadioList>
        {modalItem.size.map((size) => (
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
            <S.ModalImage
              src={
                windowWidth > tablet
                  ? modalItem.srcDesktop
                  : windowWidth > mobile
                  ? modalItem.srcTablet
                  : modalItem.srcMobile
              }
              alt={modalItem.name}
            />
          </S.ModalImageContainer>
          <S.ModalTextInfo>
            <S.ModalTitle>{modalItem.name}</S.ModalTitle>
            <S.ModalDescription>{modalItem.description}</S.ModalDescription>
            <S.ModalPrice>{modalItem.price}</S.ModalPrice>
            <S.ModalProvider>
              Vendido e entregue por {modalItem.provider}
            </S.ModalProvider>
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
