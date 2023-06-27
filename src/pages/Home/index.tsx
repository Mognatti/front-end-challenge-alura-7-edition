import { useWindowSize } from "../../hooks/useWindowSize";
import { HomeContainer } from "../../styles/StyledComponents";
import CarrosselBanner from "./BannerImages";
import Categories from "./Categoria";
import { Facilidades } from "./Facilidades";
import { Products } from "./Products";

export default function Home() {
  const [{ windowWidth, tablet, mobile }] = useWindowSize();

  return (
    <HomeContainer>
      <CarrosselBanner {...{ windowWidth, tablet, mobile }} />
      <Categories {...{ windowWidth, tablet, mobile }} />
      <Products {...{ windowWidth, tablet, mobile }} />
      <Facilidades {...{ windowWidth, tablet, mobile }} />
    </HomeContainer>
  );
}
