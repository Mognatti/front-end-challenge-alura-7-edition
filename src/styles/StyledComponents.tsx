import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
const paleta = {
  preto: "#000000",
  branco: "#FFFFFF",
  offWhite: "#DEE2E6",
  cinzaEscuro: "#343A40",
  cinzaClaro: "#CCCCCC",
  amarelo: "#DAFF01",
  roxo: "#9353FF",
  vermelho: "#EE6471",
  laranja: "#F87F46",
};

const typography = {
  fontSize: {
    title: "20px",
    content: "16px",
    small: "13px",
  },
  fontWeight: {
    bold: "700",
    extra: "500",
    regular: "400",
    light: "300",
  },
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
export const HamburguerContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const HamburguerIcon = styled(GiHamburgerMenu)`
  color: ${paleta.amarelo};
`;
export const DropDownMenu = styled.div`
  position: absolute;
  width: 144px;
  top: 0;
  left: 231px;
  background-color: ${paleta.cinzaEscuro};
`;
export const DropDownMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 8px 8px;
  z-index: 1;
`;
export const CloseDropDownMenuContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 10px 0 0;
`;
export const CloseDropDownMenu = styled(MdClose)`
  color: ${paleta.amarelo};
`;
export const DropDownMenuItem = styled.p<{ showborder: number }>`
  border-bottom: ${(props) =>
    props.showborder >= 3 ? "none" : `1px solid ${paleta.cinzaClaro}`};
  color: ${paleta.cinzaClaro};
  margin: 0;
  margin-left: 8px;
  padding: 8px 0 8px 8px;
  font-weight: 700;
  width: 80%;
  &:active {
    color: ${paleta.amarelo};
  }
`;
export const DropDownMenuLink = styled(Link)<{ changecolor: boolean }>`
  text-decoration: none;
  color: ${(props) =>
    props.changecolor ? `${paleta.amarelo}` : `${paleta.cinzaClaro}`};
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

//Footer
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${paleta.preto};
  width: 100%;
`;
export const FooterContent = styled.p`
  color: ${paleta.branco};
  text-align: center;
  @media (max-width: ${breakPoints.mobile}) {
    font-size: ${typography.fontSize.small};
    padding: 0 64px;
    margin: 17px 0;
  }
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
  border: 1px solid ${paleta.cinzaClaro};
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
export const ProductPrice = styled.p`
  font-weight: ${typography.fontWeight.bold};
`;
export const ProductButtonContainer = styled.div`
  padding: 0 0 16px 16px;
`;
export const ProductButton = styled.button`
  background-color: ${paleta.roxo};
  color: ${paleta.branco};
  border: none;
  padding: 9px 16px;
  cursor: pointer;
`;

//Modal
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.div`
  width: 700px;
  height: 587px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: initial;
  @media (max-width: ${breakPoints.mobile}) {
    width: 343px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.8;
  color: #141414;
  overflow-y: auto;
  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${paleta.preto};
  width: 100%;
  height: 65px;
`;
export const ModalHeaderIcon = styled(BsCheckCircle)`
  color: ${paleta.amarelo};
  padding: 0 20px 0 16px;
  @media (max-width: ${breakPoints.mobile}) {
    transform: scale(1.6);
  }
`;
export const ModalHeaderTitle = styled.p`
  color: ${paleta.branco};
  text-align: initial;
`;
export const ModalHeaderButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${breakPoints.mobile}) {
    margin-right: 28px;
  }
`;
export const ModalCloseButton = styled(MdClose)`
  color: ${paleta.cinzaClaro};
  cursor: pointer;
`;
export const ModalImageContainer = styled.div`
  @media (max-width: ${breakPoints.mobile}) {
    display: flex;
    justify-content: center;
  }
`;
export const ModalImage = styled.img`
  width: 350px;
  height: 422px;
  padding: 16px 0 0 16px;
  @media (max-width: ${breakPoints.mobile}) {
    width: 311px;
    margin-top: 430px;
  }
`;
export const ModalTextInfo = styled.div`
  padding: 16px 16px 0 16px;
`;
export const ModalTitle = styled.h3`
  margin: 0;
  line-height: 23px;
`;
export const ModalDescription = styled.p`
  padding: 24px 0;
  border-bottom: 1px solid ${paleta.preto};
  margin: 0;
  font-size: ${typography.fontSize.small};
`;
export const ModalPrice = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 24px 0;
  font-size: ${typography.fontSize.title};
`;
export const ModalProvider = styled.p`
  margin: 0;
  padding: 0 0 16px 0;
  color: ${paleta.cinzaClaro};
  font-size: ${typography.fontSize.small};
`;
export const ModalSelectRadio = styled.div`
  border-top: 1px solid ${paleta.cinzaClaro};
  padding: 8px 0px;
`;
export const ModalSelectTitle = styled.p`
  padding: 0 16px;
  margin: 0;
  line-height: 20px;
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.small};
`;
export const ModalRadioList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ModalRadioListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-size: ${typography.fontSize.small};
  padding: 8px 8px;
`;
export const ModalRadioInput = styled.input<{ color?: string }>`
  appearance: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "Preto"
      ? `${paleta.preto}`
      : props.color === "Offwhite"
      ? `${paleta.offWhite}`
      : props.color === "Azul claro"
      ? "#75D7F0"
      : "#FFF"};
  padding: 8px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 0px 1px ${paleta.offWhite};
  border: none;
  &:checked {
    box-shadow: inset 0px 0px 0px 4px ${paleta.roxo};
  }
`;
export const ModalRadioLabel = styled.label`
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.regular};
`;
export const ModalButtonContainer = styled.div`
  @media (max-width: ${breakPoints.mobile}) {
    padding: 0 16px 32px 16px;
  }
`;
export const ModalButton = styled.button`
  background-color: ${paleta.roxo};
  color: ${paleta.branco};
  border: none;
  padding: 9px 16px;
  font-weight: ${typography.fontWeight.extra};
  cursor: pointer;
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

//NewsLetter
export const NewsLetterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 65.5px;
`;
export const NewsLetterContent = styled.form`
  border: 2px solid ${paleta.preto};
  padding: 40px 16px;
  width: 50%;
  text-align: center;
  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
  @media (max-width: ${breakPoints.mobile}) {
    width: 130%;
  }
`;
export const NewsLetterText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  margin-top: 0;
  @media (max-width: ${breakPoints.mobile}) {
    font-size: ${typography.fontSize.content};
  }
`;
export const Cadastre = styled.span`
  font-weight: 500;
`;
export const NewsLetterInput = styled.input`
  width: 65%;
  font-size: 16px;
  line-height: 23px;
  padding: 6px 15px;
`;
export const NewsLetterButton = styled.button`
  border: none;
  font-size: 16px;
  background-color: ${paleta.roxo};
  color: ${paleta.branco};
  padding: 10px 16px;
  cursor: pointer;
`;
export const NewsLetterModalContainer = styled.div`
  width: 700px;
  height: 136px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: initial;
  @media (max-width: ${breakPoints.mobile}) {
    width: 343px;
  }
`;
export const NewsLetterModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const NewsLetterModalText = styled.p`
  padding: 16px;
  font-size: ${typography.fontSize.content};
  line-height: 23px;
  margin: 0;
  text-align: initial;
`;
