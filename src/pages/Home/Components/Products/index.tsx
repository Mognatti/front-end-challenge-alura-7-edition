import { useState } from "react";
import {
  ProductsContainer,
  ProductsList,
  ProductsTitle,
} from "../../../../styles/StyledComponents";
import { HomeComponentsProps, product } from "../interface";
import Modal from "./components/Modal";
import ProductCard from "./components/Card/Card";
import useFetchData from "../../../../hooks/useFetchData";

const title = "Produtos que estão bombando!";

export function Products({ windowWidth, tablet, mobile }: HomeComponentsProps) {
  const [modalItem, setModalItem] = useState<product | null>(null);
  const [{ productList, isLoading }] = useFetchData();

  function closeModal() {
    setModalItem(null);
  }

  if (isLoading) {
    return <p>Carregando dados...</p>;
  }
  if (productList)
    return (
      <ProductsContainer>
        <ProductsTitle>{title}</ProductsTitle>
        <ProductsList>
          {productList?.map((product) => (
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
        </ProductsList>
      </ProductsContainer>
    );
}
