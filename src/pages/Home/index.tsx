import useFetchData from "../../hooks/useFetchData";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HomeContainer } from "../../styles/StyledComponents";
import CarrosselBanner from "./Components/BannerImages";
import Categories from "./Components/Categoria";
import { Facilidades } from "./Components/Facilidades";
import NewsLetter from "./Components/NewsLetter";
import { Products } from "./Components/Products";
import { useState } from "react";

interface HomeProps {
  search: string;
}

export default function Home({ search }: HomeProps) {
  const [{ windowWidth, tablet, mobile }] = useWindowSize();
  const [{ productList, isLoading }] = useFetchData();
  const [category, setCategory] = useState("");

  return (
    <HomeContainer>
      <CarrosselBanner {...{ windowWidth, tablet, mobile }} />
      <Categories {...{ windowWidth, tablet, mobile, category, setCategory }} />
      <Products
        {...{
          windowWidth,
          tablet,
          mobile,
          productList,
          isLoading,
          category,
          search,
        }}
      />
      <Facilidades {...{ windowWidth, tablet, mobile }} />
      <NewsLetter />
    </HomeContainer>
  );
}
