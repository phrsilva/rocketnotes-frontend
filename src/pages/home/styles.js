import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container  = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > main {

    }
`;

export const Brand  = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 2.4rem;
    }



    `;
export const Menu  = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-top: 6.4rem;
    text-align: center;

    > li {
        margin-bottom: 2.4rem;
    }
    



    




`;
export const Search  = styled.div`
    grid-area: search;
    padding: 6.4rem 4rem;
    

`;
export const Content  = styled.div`
    grid-area: content;
    padding: 0 6.4rem;
    overflow-y: auto ;



`;
export const NewNote = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 1.4rem;
    font-weight: 500;
`;