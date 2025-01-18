import styled from "styled-components";
import bgImg from "../../assets/signin_background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    padding: 0 10rem    ;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    text-align: center;

    > h1 {
        font-size: 4.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.ORANGE};

    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: 4.8rem 0;

    }

    > p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100}; 

    }

    > a {
        margin-top: 2.2rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${bgImg}) no-repeat center center;
    background-size: cover;
`;