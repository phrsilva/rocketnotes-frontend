import { styled } from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 6.4rem 0;


    }

`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 0.8rem;
    }

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-decoration: none;
        }
`;


export const Content = styled.div`
    margin: 0 auto;
    max-width: 50rem;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    h1 {
        font-size: 3.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding-top: 4rem;
        font-weight: 500;
        margin-bottom: 1.6rem;
    }

    p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-top: 2.4rem;
        
    }

`;