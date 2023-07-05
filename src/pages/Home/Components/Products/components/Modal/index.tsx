import * as S from "../../../../../../styles/StyledComponents";
import { ModalProps } from "../../../interface";
import ColorOptions from "./components/ColorOptions";
import SizeOptions from "./components/SizeOptions";

export default function Modal({ item, closeModal }: ModalProps) {
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
          <div className="image">
            <S.ModalImage src={item.srcDesktop} alt={item.name} />
          </div>
          <S.ModalTextInfo>
            <S.ModalTitle>{item.name}</S.ModalTitle>
            <S.ModalDescription>{item.description}</S.ModalDescription>
            <S.ModalPrice>{item.price}</S.ModalPrice>
            <S.ModalProvider>Vendido e entregue por alguém 😉</S.ModalProvider>
            <S.ModalSelectRadio>
              <S.ModalSelectTitle> Cores: </S.ModalSelectTitle>
              <S.ModalRadioList>
                {item.colorOptions.map((color) => (
                  <ColorOptions {...color} />
                ))}
              </S.ModalRadioList>
            </S.ModalSelectRadio>
            <S.ModalSelectRadio>
              <S.ModalSelectTitle> Tamanho: </S.ModalSelectTitle>
              <S.ModalRadioList>
                {item.size.map((size) => (
                  <SizeOptions key={size} size={size} />
                ))}
              </S.ModalRadioList>
            </S.ModalSelectRadio>
            <div className="sacola">
              <S.ModalButton> Adicionar à sacola </S.ModalButton>
            </div>
          </S.ModalTextInfo>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Background>
  );
}
