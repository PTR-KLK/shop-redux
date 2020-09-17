import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 15px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const ProductDescription = styled.div`
    width: ${props => props.small ? "85%" : "70%"};
    margin: 1rem 1rem 1rem 0;
`;

export const ProductImage = styled.img`
    width: 40%;
    margin: 1rem;

    @media (min-width: 768px) {
        width: ${props => props.small ? "15%" : "30%"};
    }
`;

export const ProductTitle = styled.h3`
    margin: 0 1rem 1rem 0;
`;