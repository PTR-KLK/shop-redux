import React from "react";
import { Container } from "./banner.styles";

function Banner( {children} ) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Banner;
