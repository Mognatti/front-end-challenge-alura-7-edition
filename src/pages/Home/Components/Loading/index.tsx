import * as S from "../../../../styles/StyledComponents";

export default function Loading() {
  return (
    <S.LoadingContainer>
      <S.Ring>
        Carregando
        <S.Dot></S.Dot>
      </S.Ring>
    </S.LoadingContainer>
  );
}
