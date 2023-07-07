import { useState, useEffect } from "react";
import {
  ProductsContainer,
  ProductsList,
  ProductsTitle,
} from "../../../../styles/StyledComponents";
import { ProductsProps, product } from "../interface";
import Modal from "./components/Modal";
import ProductCard from "./components/Card/Card";

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
  const [filteredList, setFilteredList] = useState<product[] | undefined>(
    productList
  );

  const categoryFilter = (selected: string) => {
    if (selected) {
      return selected.toLowerCase().includes(category.toLowerCase());
    } else {
      return true;
    }
  };

  const searchFilter = (selected: string) => {
    const reg = new RegExp(search, "i");
    return reg.test(selected);
  };

  useEffect(() => {
    const newList = productList?.filter(
      (product) =>
        searchFilter(product.name) && categoryFilter(product.category)
    );
    setFilteredList(newList);
  }, [category, search, productList]);

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
        </ProductsList>
      </ProductsContainer>
    );
}
