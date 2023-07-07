import { useState, useEffect } from "react";
import { UseFilterProps, product } from "../interface";

export default function useFilter({
  productList,
  search,
  category,
}: UseFilterProps) {
  const [filteredList, setFilteredList] = useState<product[] | undefined>(
    productList
  );

  function searchTest(productName: string) {
    const reg = new RegExp(search, "i");
    return reg.test(productName);
  }

  function categoryTest(productCategory: string) {
    if (category) {
      return productCategory.toLowerCase().includes(category.toLowerCase());
    }
    return true;
  }

  useEffect(() => {
    const newList = productList?.filter(
      (product) => searchTest(product.name) && categoryTest(product.category)
    );
    setFilteredList(newList);
  }, [search, category, productList]);

  return [{ filteredList }];
}
