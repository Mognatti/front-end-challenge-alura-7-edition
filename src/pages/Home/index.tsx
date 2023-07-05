import { useWindowSize } from "../../hooks/useWindowSize";
import { HomeContainer } from "../../styles/StyledComponents";
import CarrosselBanner from "./Components/BannerImages";
import Categories from "./Components/Categoria";
import { Facilidades } from "./Components/Facilidades";
import NewsLetter from "./Components/NewsLetter";
import { Products } from "./Components/Products";

export default function Home() {
  const [{ windowWidth, tablet, mobile }] = useWindowSize();

  return (
    <HomeContainer>
      <CarrosselBanner {...{ windowWidth, tablet, mobile }} />
      <Categories {...{ windowWidth, tablet, mobile }} />
      <Products {...{ windowWidth, tablet, mobile }} />
      <Facilidades {...{ windowWidth, tablet, mobile }} />
      <NewsLetter />
    </HomeContainer>
  );
}
