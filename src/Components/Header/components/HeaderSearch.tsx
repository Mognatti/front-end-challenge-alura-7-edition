import {
  SearchButton,
  SearchContainer,
  SearchInput,
} from "../../../styles/StyledComponents";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export default function Search({ search, setSearch }: SearchProps) {
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
