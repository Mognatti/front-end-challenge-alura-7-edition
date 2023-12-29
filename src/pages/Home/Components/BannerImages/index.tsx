import { useState } from "react";
import {
  BannerImg,
  BannerLi,
  CarrosselList,
  CarrosselContainer,
  ImageContainer,
  LeftArrow,
  RigthArrow,
} from "../../../../styles/StyledComponents";
import { banners } from "./bannerList";
import { HomeComponentsProps } from "../../../../interface";

export default function CarrosselBanner({ windowWidth, tablet, mobile }: HomeComponentsProps) {
  const [bannerAtual, setBannerAtual] = useState(0);
  const length = banners.length;

  function nextBanner() {
    setBannerAtual(bannerAtual === length - 1 ? 0 : bannerAtual + 1);
  }

  function prevBanner() {
    setBannerAtual(bannerAtual === 0 ? length - 1 : bannerAtual - 1);
  }

  return (
    <CarrosselContainer>
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
    </CarrosselContainer>
  );
}
