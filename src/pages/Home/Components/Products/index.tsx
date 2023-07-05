import { useState } from "react";
import {
  ProductsContainer,
  ProductsList,
  ProductsTitle,
} from "../../../../styles/StyledComponents";
import { HomeComponentsProps, product } from "../interface";
import { productsList } from "./productsList";
import Modal from "./components/Modal";
import ProductCard from "./components/Card/Card";

const title = "Produtos que estão bombando!";

export function Products({ windowWidth, tablet, mobile }: HomeComponentsProps) {
  const [modalItem, setModalItem] = useState<product | null>(null);

  function closeModal() {
    setModalItem(null);
  }

  return (
    <ProductsContainer>
      <ProductsTitle>{title}</ProductsTitle>
      <ProductsList>
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            {...{ product, mobile, tablet, windowWidth, setModalItem }}
          />
        ))}
        {modalItem && (
          <Modal {...{ modalItem, closeModal, windowWidth, tablet, mobile }} />
        )}
      </ProductsList>
    </ProductsContainer>
  );
}
