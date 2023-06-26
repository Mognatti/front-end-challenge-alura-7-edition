import {
  SearchButton,
  SearchContainer,
  SearchInput,
} from "../../../styles/StyledComponents";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Digite o produto"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      ></SearchInput>
      <SearchButton> Buscar </SearchButton>
    </SearchContainer>
  );
}
