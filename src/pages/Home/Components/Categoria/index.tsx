import {
  CategoriesContainer,
  CategoriesItem,
  CategoriesList,
  CategoriesTitle,
  CategorisItemName,
} from "../../../../styles/StyledComponents";
import { CategoryProps } from "../interface";
import { categorias } from "./categoriasList";

const title = "Busque por categoria:";
export default function Categories({
  windowWidth,
  tablet,
  mobile,
  category,
  setCategory,
}: CategoryProps) {
  function filterCategory(selected: string) {
    category === selected ? setCategory("") : setCategory(selected);
  }

  return (
    <CategoriesContainer>
      <CategoriesTitle>{title}</CategoriesTitle>
      <CategoriesList>
        {categorias.map((categoria) => (
          <CategoriesItem
            onClick={() => filterCategory(categoria.name)}
            key={categoria.id}
          >
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
