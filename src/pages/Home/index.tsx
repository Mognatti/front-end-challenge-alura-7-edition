import { useState } from "react";
import {
  BannerImg,
  BannerLi,
  CarrosselList,
  HomeContainer,
  ImageContainer,
  LeftArrow,
  RigthArrow,
} from "../../styles/StyledComponents";
import { banners } from "./BannerImages";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function Home() {
  const [bannerAtual, setBannerAtual] = useState(0);
  const [{ windowWidth, tablet, mobile }] = useWindowSize();
  const length = banners.length;

  function nextBanner() {
    setBannerAtual(bannerAtual === length - 1 ? 0 : bannerAtual + 1);
  }

  function prevBanner() {
    setBannerAtual(bannerAtual === 0 ? length - 1 : bannerAtual - 1);
  }

  return (
    <HomeContainer>
      <ImageContainer>
        <CarrosselList>
          <LeftArrow onClick={() => prevBanner()} size="25" />
          {banners.map((banner, index) => {
            if (index === bannerAtual) {
              return (
                <BannerLi key={banner.nome}>
                  <BannerImg
                    src={
                      windowWidth > tablet
                        ? banner.srcDesktop
                        : windowWidth <= tablet && windowWidth > mobile
                        ? banner.srcTablet
                        : banner.srcMobile
                    }
                    alt={banner.nome}
                  />
                </BannerLi>
              );
            }
          })}
          <RigthArrow onClick={() => nextBanner()} size="25" />
        </CarrosselList>
      </ImageContainer>
    </HomeContainer>
  );
}
