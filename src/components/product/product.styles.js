import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 15px;
`;

export const ProductDescription = styled.div`
    width: ${props => props.small ? "85%" : "70%"};
    margin: 1rem 1rem 1rem 0;
`;

export const ProductImage = styled.img`
    width: ${props => props.small ? "15%" : "30%"};
    margin: 1rem;
`;

export const ProductTitle = styled.h3`
    margin: 0 1rem 1rem 0;
`;