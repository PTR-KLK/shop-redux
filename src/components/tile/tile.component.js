import React from "react";
import { Container } from "./tile.styles";

function Tile( {children} ) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Tile;
