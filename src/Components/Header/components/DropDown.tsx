import {
  DropDownMenuList,
  CloseDropDownMenuContainer,
  CloseDropDownMenu,
  DropDownMenuItem,
  DropDownMenuLink,
  DropDownMenu,
} from "../../../styles/StyledComponents";
import { navOptionsType } from "./navOptions";

interface Props {
  navOptionsList: navOptionsType[];
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropDown({ navOptionsList, setShowSelect }: Props) {
  return (
    <DropDownMenu>
      <DropDownMenuList>
        <CloseDropDownMenuContainer>
          <CloseDropDownMenu size="20" onClick={() => setShowSelect(false)} />
        </CloseDropDownMenuContainer>
        {navOptionsList.map((option, index) => (
          <DropDownMenuItem key={option.id} showBorder={index}>
            <DropDownMenuLink to={option.to}>{option.nome}</DropDownMenuLink>
          </DropDownMenuItem>
        ))}
      </DropDownMenuList>
    </DropDownMenu>
  );
}
