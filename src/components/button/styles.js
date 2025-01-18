import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;
    font-weight: 500;
    
    width: 55rem;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    &:disabled {
        opacity: 0.5;
        
    }

    


`;