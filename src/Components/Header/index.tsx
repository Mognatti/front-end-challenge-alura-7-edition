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
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";
import DropDown from "./components/DropDown";
import Search from "./components/HeaderSearch";

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ search, setSearch }: HeaderProps) {
  const [showSelect, setShowSelect] = useState(false);
  const [{ windowWidth, mobile, showHamburguer }] = useWindowSize();

  return (
    <NavHeader>
      <LogoAndList>
        <HeaderLogo
          src={windowWidth <= mobile ? "images/Mobile/Logo mobile.png" : "images/Desktop/Logo-desktop.png"}
          alt="Meteora-logo"
        />
        <Nav>
          {showHamburguer ? (
            <HamburguerContainer>
              <HamburguerIcon size="20" onClick={() => setShowSelect(true)} />
              {showSelect && <DropDown navOptionsList={navOptionsList} setShowSelect={setShowSelect} />}
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
      <Search {...{ search, setSearch }} />
    </NavHeader>
  );
}
