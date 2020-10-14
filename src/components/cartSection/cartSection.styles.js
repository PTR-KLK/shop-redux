import styled from "styled-components";
import { colors } from "../../utils/theme";
import { Link } from "react-router-dom";

export const Container = styled.section`
  background: ${colors.light};
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
`;

export const OrderLink = styled(Link)`
  font-size: 1rem;
  padding: 0.5rem;
  background: ${colors.secondary};
  cursor: pointer;
  color: ${colors.light};
  border: none;
  text-decoration: none;
  font-weight: bold;
`;
