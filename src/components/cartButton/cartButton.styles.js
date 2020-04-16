import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartButtonContainer = styled(Link)`
    color: white;
    text-decoration: none;
    margin-right: 2rem;

    &:hover {
        color: teal;
      }
`;