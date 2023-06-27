import {
  HamburguerContainer,
  HamburguerIcon,
  HeaderLogo,
  ListItem,
  LogoAndList,
  Nav,
  NavHeader,
  NavLink,
  NavList,
} from "../../styles/StyledComponents";
import { navOptionsList } from "./components/navOptions";
import Search from "./components/search";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";
import DropDown from "./components/DropDown";

export default function Header() {
  const [showSelect, setShowSelect] = useState(false);
  const [{ windowWidth, mobile, showHamburguer }] = useWindowSize();

  return (
    <NavHeader>
      <LogoAndList>
        <HeaderLogo
          src={
            windowWidth <= mobile
              ? "src/assets/Mobile/Logo mobile.png"
              : "src/assets/Desktop/Logo-desktop.png"
          }
          alt="Meteora-logo"
        />
        <Nav>
          {showHamburguer ? (
            <HamburguerContainer>
              <HamburguerIcon size="20" onClick={() => setShowSelect(true)} />
              {showSelect && (
                <DropDown
                  navOptionsList={navOptionsList}
                  setShowSelect={setShowSelect}
                />
              )}
            </HamburguerContainer>
          ) : (
            <NavList>
              {navOptionsList.map((option) => (
                <ListItem key={option.id}>
                  <NavLink to={option.to}>{option.nome}</NavLink>
                </ListItem>
              ))}
            </NavList>
          )}
        </Nav>
      </LogoAndList>
      <Search />
    </NavHeader>
  );
}
