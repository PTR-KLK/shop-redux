import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme"

export const ProductContainer = styled.div`
    display: flex;
    background: ${colors.light};
    color: ${colors.dark};
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
`;

export const ProductDescription = styled.div`
    width: 70%;
    margin: 1rem 1rem 1rem 0;

    p {
        overflow-wrap: break-word;
    }
`;

export const ProductImage = styled.img`
    width: 40%;
    margin: 1rem;
`;

export const ProductTitle = styled.h3`
    margin: 0 1rem 1rem 0;
`;