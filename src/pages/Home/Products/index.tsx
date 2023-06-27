import {
  ProductButton,
  ProductButtonContainer,
  ProductsContainer,
  ProductsImage,
  ProductsItem,
  ProductsItemInfo,
  ProductsItemInfoDescription,
  ProductsItemInfoDescriptionContainer,
  ProductsItemInfoTitle,
  ProductsList,
  ProductsTitle,
} from "../../../styles/StyledComponents";
import { HomeComponentsProps } from "../BannerImages";

const title = "Produtos que estão bombando!";
import { productsList } from "./productsList";

export function Products({ windowWidth, tablet, mobile }: HomeComponentsProps) {
  return (
    <ProductsContainer>
      <ProductsTitle>{title}</ProductsTitle>
      <ProductsList>
        {productsList.map((product) => (
          <ProductsItem key={product.id}>
            <ProductsImage
              src={
                windowWidth > tablet
                  ? product.srcDesktop
                  : windowWidth <= tablet && windowWidth > mobile
                  ? product.srcTablet
                  : product.srcMobile
              }
              alt={product.name}
            />
            <ProductsItemInfo>
              <ProductsItemInfoTitle>{product.name}</ProductsItemInfoTitle>
              <ProductsItemInfoDescriptionContainer>
                <ProductsItemInfoDescription>
                  {product.description}
                </ProductsItemInfoDescription>
                <p>{product.price}</p>
              </ProductsItemInfoDescriptionContainer>
            </ProductsItemInfo>
            <ProductButtonContainer>
              <ProductButton>Ver Mais</ProductButton>
            </ProductButtonContainer>
          </ProductsItem>
        ))}
      </ProductsList>
    </ProductsContainer>
  );
}
