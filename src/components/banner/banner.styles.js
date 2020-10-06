import styled from "styled-components";
import { colors } from "../../utils/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 1rem 0;
  max-width: 600px;
  width: 100%;
  padding: 1rem 1rem 0;
  background: ${colors.light};
  color: ${colors.dark};
`;
