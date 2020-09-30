import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme"

export const ProductContainer = styled.div`
    display: flex;
    background: ${colors.light};
    color: ${colors.dark};
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
`;

export const ProductDescription = styled.div`
    width: 100%;

    p {
        overflow-wrap: break-word;
        margin: 0.5rem 0;
    }

    @media (min-width: ${breakpoints.tablet}) {
        width: 70%;
    }
`;

export const ProductImage = styled.img`
    height: auto;
    width: 50%;
    margin: 0;

    @media (min-width: ${breakpoints.tablet}) {
        width: 33%;
    }

    @media (min-width: ${breakpoints.tablet}) {
        width: 25%;
        margin 0 1rem 0 0;
    }
`;

export const ProductTitle = styled.h3`
    margin 0.5rem 0 0;

    @media (min-width: ${breakpoints.tablet}) {
        margin 0;
    }
`;

export const Price = styled.p`
    font-weight: bold;
`;

export const Button = styled.button`
    width: 100%;
    background: ${props => props.danger ? colors.danger : colors.secondary};
    color: ${colors.light};
    padding: 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
`;