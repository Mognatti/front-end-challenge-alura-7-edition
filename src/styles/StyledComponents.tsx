import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbPlayerPlayFilled } from "react-icons/tb";

const paleta = {
  preto: "#000000",
  branco: "#FFFFFF",
  cinza: "#CCCCCC",
  amarelo: "#DAFF01",
  roxo: "#9353FF",
  vermelho: "#EE6471",
  laranja: "#F87F46",
};

//Header
export const NavHeader = styled.header`
  background-color: ${paleta.preto};
  width: 100%;
  height: 58px;
  position: absolute;
  display: flex;
  align-items: center;
`;
export const HeaderLogo = styled.img`
  width: 132.75px;
  height: 32px;
  margin-left: 23px;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
`;
export const ListItem = styled.li`
  color: white;
  margin-left: 40px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

//Search
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-right: 35px;
`;
export const SearchButton = styled.button`
  margin-left: 28px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 9px 12px;
  cursor: pointer;
`;
export const SearchInput = styled.input`
  padding: 7.5px 0px 6.5px 15px;
  width: 155px;
`;

//Home
export const HomeContainer = styled.section`
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
`;
export const LeftArrow = styled(TbPlayerPlayFilled)`
  position: absolute;
  margin-left: 38.23px;
  cursor: pointer;
  transform: rotate(180deg);
  color: ${paleta.branco};
  :hover {
    transition: 350ms;
    transform: scale(1.2);
  }
`;
export const RigthArrow = styled(TbPlayerPlayFilled)`
  position: absolute;
  margin-right: 38.23px;
  margin-left: 95%;
  cursor: pointer;
  color: ${paleta.branco};
  :hover {
    transition: 350ms;
    transform: scale(1.2);
  }
`;
