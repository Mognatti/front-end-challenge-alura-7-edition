import {
  CloseDropDownMenu,
  CloseDropDownMenuContainer,
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuLink,
  DropDownMenuList,
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
import { navoptions } from "./components/navOptions";
import Search from "./components/search";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";

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
                <DropDownMenu>
                  <DropDownMenuList>
                    <CloseDropDownMenuContainer>
                      <CloseDropDownMenu
                        size="20"
                        onClick={() => setShowSelect(false)}
                      >
                        X
                      </CloseDropDownMenu>
                    </CloseDropDownMenuContainer>
                    {navoptions.map((option, index) => (
                      <DropDownMenuItem key={option.id} pos={index}>
                        <DropDownMenuLink to={option.to}>
                          {option.nome}
                        </DropDownMenuLink>
                      </DropDownMenuItem>
                    ))}
                  </DropDownMenuList>
                </DropDownMenu>
              )}
            </HamburguerContainer>
          ) : (
            <NavList>
              {navoptions.map((option) => (
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
