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

export default function Home() {
  const [bannerAtual, setBannerAtual] = useState(0);
  const length = banners.length;

  function nextBanner() {
    setBannerAtual(bannerAtual === length - 1 ? 0 : bannerAtual + 1);
  }

  function prevBanner() {
    setBannerAtual(bannerAtual === 0 ? length - 1 : bannerAtual - 1);
  }
  console.log(bannerAtual);

  return (
    <HomeContainer>
      <ImageContainer>
        <CarrosselList>
          <LeftArrow onClick={() => prevBanner()} size="25" />
          {banners.map((banner, index) =>
            index === bannerAtual ? (
              <BannerLi key={banner.nome}>
                <BannerImg src={banner.srcDesktop} alt={banner.nome} />
              </BannerLi>
            ) : (
              <></>
            )
          )}
          <RigthArrow onClick={() => nextBanner()} size="25" />
        </CarrosselList>
      </ImageContainer>
    </HomeContainer>
  );
}
