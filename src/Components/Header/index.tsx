import {
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

export default function Header() {
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
            <HamburguerIcon size="20" />
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
