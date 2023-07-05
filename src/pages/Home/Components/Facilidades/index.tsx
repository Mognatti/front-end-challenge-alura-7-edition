import {
  FacilidadeItemDescription,
  FacilidadesContainer,
  FacilidadesImage,
  FacilidadesItem,
  FacilidadesItemInfo,
  FacilidadesItemTitle,
  FacilidadesList,
  FacilidadesTitle,
} from "../../../../styles/StyledComponents";
import { HomeComponentsProps } from "../interface";
import { facilidadesList } from "./facilidadesList";

const title = "Conheça todas as nossas facilidades";
export function Facilidades({
  windowWidth,
  tablet,
  mobile,
}: HomeComponentsProps) {
  return (
    <FacilidadesContainer>
      <FacilidadesTitle>{title}</FacilidadesTitle>
      <FacilidadesList>
        {facilidadesList.map((facilidade) => (
          <FacilidadesItem key={facilidade.id}>
            <FacilidadesImage
              src={
                windowWidth > tablet
                  ? facilidade.iconDesktop
                  : windowWidth <= tablet && windowWidth > mobile
                  ? facilidade.iconTablet
                  : facilidade.iconMobile
              }
              alt={facilidade.title}
            />
            <FacilidadesItemInfo>
              <FacilidadesItemTitle>{facilidade.title}</FacilidadesItemTitle>
              <FacilidadeItemDescription>
                {facilidade.description}
              </FacilidadeItemDescription>
            </FacilidadesItemInfo>
          </FacilidadesItem>
        ))}
      </FacilidadesList>
    </FacilidadesContainer>
  );
}
