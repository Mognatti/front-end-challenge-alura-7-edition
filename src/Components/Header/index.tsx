import {
  HeaderLogo,
  ListItem,
  Nav,
  NavHeader,
  NavLink,
  NavList,
} from "../../styles/StyledComponents";
import { navoptions } from "./components/navOptions";
import Search from "./components/search";

export default function Header() {
  return (
    <NavHeader>
      <HeaderLogo
        src="src/assets/Desktop/Logo-desktop.png"
        alt="Meteora-logo"
      />
      <Nav>
        <NavList>
          {navoptions.map((option) => (
            <ListItem key={option.id}>
              <NavLink to={option.to}>{option.nome}</NavLink>
            </ListItem>
          ))}
        </NavList>
      </Nav>
      <Search />
    </NavHeader>
  );
}
