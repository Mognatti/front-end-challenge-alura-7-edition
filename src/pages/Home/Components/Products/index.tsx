import { useState } from "react";
import * as S from "../../../../styles/StyledComponents";
import { ProductsProps, product } from "../../../../interface";
import Modal from "./components/Modal";
import ProductCard from "./components/Card/Card";
import useFilter from "../../../../hooks/useFilter";
import Loading from "../Loading";

const title = "Produtos que estão bombando!";

export function Products({
  windowWidth,
  tablet,
  mobile,
  productList,
  isLoading,
  category,
  search,
}: ProductsProps) {
  const [modalItem, setModalItem] = useState<product | null>(null);
  const [{ filteredList }] = useFilter({ productList, search, category });

  function closeModal() {
    setModalItem(null);
  }

  if (isLoading) {
    return <Loading />;
  }
  if (productList)
    return (
      <S.ProductsContainer>
        <S.ProductsTitle>{title}</S.ProductsTitle>
        <S.ProductsList>
          {filteredList?.map((product) => (
            <ProductCard
              key={product.id}
              {...{ product, mobile, tablet, windowWidth, setModalItem }}
            />
          ))}
          {modalItem && (
            <Modal
              {...{ modalItem, closeModal, windowWidth, tablet, mobile }}
            />
          )}
        </S.ProductsList>
      </S.ProductsContainer>
    );
}
