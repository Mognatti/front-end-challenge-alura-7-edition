import {
  DropDownMenuList,
  CloseDropDownMenuContainer,
  CloseDropDownMenu,
  DropDownMenuItem,
  DropDownMenuLink,
  DropDownMenu,
} from "../../../styles/StyledComponents";
import { navOptionsType } from "./navOptions";
import { useState } from "react";

interface Props {
  navOptionsList: navOptionsType[];
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropDown({ navOptionsList, setShowSelect }: Props) {
  const [changeColor, setChangeColor] = useState<number>();

  return (
    <DropDownMenu>
      <DropDownMenuList>
        <CloseDropDownMenuContainer>
          <CloseDropDownMenu size="20" onClick={() => setShowSelect(false)} />
        </CloseDropDownMenuContainer>
        {navOptionsList.map((option, index) => (
          <DropDownMenuItem key={option.id} showborder={index}>
            <DropDownMenuLink
              to={option.to}
              changecolor={changeColor === index}
              onClick={() => setChangeColor(index)}
            >
              {option.nome}
            </DropDownMenuLink>
          </DropDownMenuItem>
        ))}
      </DropDownMenuList>
    </DropDownMenu>
  );
}
