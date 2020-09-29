import styled from "styled-components";
import { colors } from "../../utils/theme"
import { Link } from "react-router-dom";

export const CartButtonContainer = styled(Link)`
    color: ${colors.light};
    text-decoration: none;
    margin-right: 2rem;

    &:hover {
        color: ${colors.secondary};
      }
`;