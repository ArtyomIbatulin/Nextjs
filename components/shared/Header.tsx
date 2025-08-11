import React from "react";
import { Container } from "./Container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <Container>
      <header className={className}>Header</header>
    </Container>
  );
};
