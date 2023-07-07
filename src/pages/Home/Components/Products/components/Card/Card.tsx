import {
  ProductButton,
  ProductButtonContainer,
  ProductPrice,
  ProductsImage,
  ProductsItem,
  ProductsItemInfo,
  ProductsItemInfoDescription,
  ProductsItemInfoDescriptionContainer,
  ProductsItemInfoTitle,
} from "../../../../../../styles/StyledComponents";
import { ProductCardProps } from "../../../../../../interface";

export default function ProductCard({
  product,
  windowWidth,
  tablet,
  mobile,
  setModalItem,
}: ProductCardProps) {
  return (
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
          <ProductPrice>{product.price}</ProductPrice>
        </ProductsItemInfoDescriptionContainer>
      </ProductsItemInfo>
      <ProductButtonContainer>
        <ProductButton onClick={() => setModalItem(product)}>
          Ver Mais
        </ProductButton>
      </ProductButtonContainer>
    </ProductsItem>
  );
}
