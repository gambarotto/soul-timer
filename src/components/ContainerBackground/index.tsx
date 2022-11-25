import React from 'react';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}
const ContainerBackground: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <Container
      start={[0.1, 0.85]}
      locations={[0.1, 0.1]}
      colors={[theme.colors.blue_dark, theme.colors.blue_dark3]}
    >
      {children}
    </Container>
  );
};

export default ContainerBackground;
