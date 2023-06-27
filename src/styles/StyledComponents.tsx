import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const paleta = {
  preto: "#000000",
  branco: "#FFFFFF",
  cinza: "#CCCCCC",
  amarelo: "#DAFF01",
  roxo: "#9353FF",
  vermelho: "#EE6471",
  laranja: "#F87F46",
};

const breakPoints = {
  desktop: "1440px",
  tablet: "768px",
  mobile: "376px",
};

//Header
export const NavHeader = styled.header`
  display: flex;
  width: 100%;
  height: 8.3vh;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  background-color: ${paleta.preto};
  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;
export const HeaderLogo = styled.img`
  width: 127.5px;
  height: 32px;
  margin-left: 23px;
  @media (max-width: ${breakPoints.tablet}) {
    width: 99.56px;
    height: 24px;
    margin-left: 15px;
  }
  @media (max-width: ${breakPoints.mobile}) {
    width: 125.7px;
    height: 18px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: ${breakPoints.mobile}) {
    justify-content: flex-end;
    margin-right: 21px;
    padding: 16px 0;
  }
`;
export const LogoAndList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const HamburguerIcon = styled(GiHamburgerMenu)`
  color: ${paleta.amarelo};
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  padding: 0;
  margin: 0;
  @media (max-width: ${breakPoints.tablet}) {
    justify-content: space-evenly;
    margin-right: 65px;
  }
`;
export const ListItem = styled.li`
  color: white;
  margin-left: 40px;
  font-size: 16px;
  line-height: 23px;
  @media (max-width: ${breakPoints.tablet}) {
    margin-left: 20px;
    font-size: 13px;
    line-height: 20px;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

//Search
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 23px;
  justify-content: flex-end;
  flex-direction: row;
  width: 30%;
  @media (max-width: ${breakPoints.mobile}) {
    margin: 0;
    padding: 8px;
    width: 100%;
    height: 58px;
    justify-content: center;
    background-color: ${paleta.branco};
  }
`;
export const SearchButton = styled.button`
  margin-left: 16px;
  background-color: transparent;
  border: 1px solid ${paleta.branco};
  color: white;
  padding: 9px 12px;
  cursor: pointer;
  @media (max-width: ${breakPoints.mobile}) {
    color: ${paleta.preto};
    border: 1px solid ${paleta.preto};
    padding: 9px 16.21px;
  }
`;
export const SearchInput = styled.input`
  padding: 7.5px 0px 6.5px 15px;
  width: 155px;
  @media (max-width: ${breakPoints.mobile}) {
    padding: 9px 18.6px 8px 12px;
  }
`;

//Pages - Home
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//BannerImages
export const CarrosselContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  width: 100%;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const CarrosselList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
`;
export const BannerLi = styled.li`
  width: 100%;
`;
export const BannerImg = styled.img`
  width: 100%;
  transition: 350ms;
  @media (max-width: ${breakPoints.mobile}) {
    margin-top: 70px;
  }
`;
export const LeftArrow = styled(TbPlayerPlayFilled)`
  position: absolute;
  margin-left: 38.23px;
  cursor: pointer;
  color: ${paleta.branco};
  transform: rotateY(180deg);
  &:hover {
    transition: 350ms;
    transform: rotateY(180deg) scale(1.2);
  }
`;
export const RigthArrow = styled(TbPlayerPlayFilled)`
  position: absolute;
  margin-right: 38.23px;
  margin-left: 95%;
  cursor: pointer;
  color: ${paleta.branco};
  &:hover {
    transition: 350ms;
    transform: scale(1.2);
  }
`;

//Categories
export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const CategoriesTitle = styled.h3`
  font-weight: 500;
  font-size: 32px;
`;
export const CategoriesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
  @media (max-width: ${breakPoints.tablet}) {
    flex-wrap: wrap;
  }
`;
export const CategoriesItem = styled.li``;

export const CategorisItemName = styled.p`
  text-align: center;
  color: ${paleta.branco};
  background-color: ${paleta.preto};
  padding: 8px;
  margin: -8px 0 0 0;
`;

//Products
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 48px;
`;
export const ProductsTitle = styled.h3`
  font-weight: 500;
  font-size: 32px;
  @media (max-width: ${breakPoints.mobile}) {
    text-align: center;
  }
`;
export const ProductsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  gap: 30px;
  @media (max-width: ${breakPoints.tablet}) {
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const ProductsItem = styled.li`
  border: 1px solid ${paleta.cinza};
`;
export const ProductsImage = styled.img`
  width: 350px;
  height: 422px;
  @media (max-width: ${breakPoints.tablet}) {
    width: 330px;
  }
`;
export const ProductsItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0;
  text-align: justify;
  @media (max-width: ${breakPoints.tablet}) {
    width: 330px;
  }
`;
export const ProductsItemInfoTitle = styled.p`
  font-weight: bold;
  padding: 6px 16px;
  margin: 0;
`;
export const ProductsItemInfoDescriptionContainer = styled.div`
  padding: 6px 16px;
`;
export const ProductsItemInfoDescription = styled.p`
  font-size: 13px;
  line-height: 20px;
  margin: 0;
`;
export const ProductButtonContainer = styled.div`
  padding: 0 0 16px 16px;
`;
export const ProductButton = styled.button`
  background-color: ${paleta.roxo};
  color: ${paleta.branco};
  border: none;
  padding: 9px 16px;
`;

//Facilidades
export const FacilidadesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 84px;
  background-color: ${paleta.preto};
  @media (max-width: ${breakPoints.mobile}) {
    flex-wrap: wrap;
    margin-top: 48px;
  }
`;
export const FacilidadesTitle = styled.h3`
  font-weight: 500;
  font-size: 32px;
  padding-bottom: 32px;

  color: ${paleta.branco};
  @media (max-width: ${breakPoints.mobile}) {
    text-align: center;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0;
  }
`;
export const FacilidadesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  gap: 30px;
  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
    align-content: center;
  }
`;
export const FacilidadesItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding-bottom: 40px;
  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
  }
`;
export const FacilidadesImage = styled.img`
  width: 72px;
  height: 72px;
  @media (max-width: ${breakPoints.mobile}) {
    width: 56px;
    height: 56px;
  }
`;
export const FacilidadesItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 24px;
  text-align: justify;
`;
export const FacilidadesItemTitle = styled.h3`
  color: ${paleta.amarelo};
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  margin: 0;
`;
export const FacilidadeItemDescription = styled.p`
  color: ${paleta.branco};
  margin: 0;
  padding: 16px 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;
