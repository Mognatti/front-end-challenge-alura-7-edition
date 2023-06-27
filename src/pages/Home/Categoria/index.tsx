import {
  CategoriesContainer,
  CategoriesItem,
  CategoriesList,
  CategoriesTitle,
  CategorisItemName,
} from "../../../styles/StyledComponents";
import { HomeComponentsProps } from "../BannerImages";
import { categorias } from "./categoriasList";

const title = "Busque por categoria:";
export default function Categories({
  windowWidth,
  tablet,
  mobile,
}: HomeComponentsProps) {
  return (
    <CategoriesContainer>
      <CategoriesTitle>{title}</CategoriesTitle>
      <CategoriesList>
        {categorias.map((categoria) => (
          <CategoriesItem key={categoria.id}>
            <img
              src={
                windowWidth > tablet
                  ? categoria.srcDesktop
                  : windowWidth <= tablet && windowWidth > mobile
                  ? categoria.srcTablet
                  : categoria.srcMobile
              }
              alt={categoria.name}
            />
            <CategorisItemName>{categoria.name}</CategorisItemName>
          </CategoriesItem>
        ))}
      </CategoriesList>
    </CategoriesContainer>
  );
}
