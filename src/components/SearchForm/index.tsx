import { MagnifyingGlass } from "phosphor-react";
import { FC } from "react";

import * as S from "./styles";

const SearchForm : FC = () => {
    return (
        <S.SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </S.SearchFormContainer>
    );
}

export default SearchForm;