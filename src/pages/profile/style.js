import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    
    > header {
        width: 100%;
        height: 10.5rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        display: flex;
        align-items: center;
        padding: 0 4rem;

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 2.4rem;

        }


    }

`;

export const Form = styled.form`
    max-width: 55rem;
    margin: 2rem auto;


`;

export const Avatar = styled.div`
    position: relative;
    margin: -11.2rem auto 3.2rem;
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            width: 2.4rem;
            height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
    
`;
