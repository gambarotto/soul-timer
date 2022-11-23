import React from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  Logo,
  Phrase,
  ContainerButtons,
  Button,
  GradientButton,
  ImageButton,
  TextButton,
  TextButton2,
  TextInfo,
} from './styles';
import ImageLogo from '../../assets/images/logo.png';
import PlusssImage from '../../assets/images/plusss.png';
import ClocksImage from '../../assets/images/clocks.png';

interface Props {
  onLayout: () => Promise<void>;
}

const Home: React.FC<Props> = ({ onLayout }) => {
  const theme = useTheme();
  return (
    <Container onLayout={onLayout}>
      <Logo source={ImageLogo} />
      <Phrase>Desafie seus limites</Phrase>
      <ContainerButtons>
        <Button>
          <GradientButton
            start={[0.39, 0.94]}
            end={[0.7, 1]}
            locations={[0, 1]}
            colors={[theme.colors.blue_dark2, theme.colors.pink]}
          >
            <ImageButton source={PlusssImage} resizeMode="contain" />
            <TextButton color={theme.colors.pink}>Novo</TextButton>
            <TextButton2 color={theme.colors.pink}>Timer</TextButton2>
          </GradientButton>
        </Button>
        <Button>
          <GradientButton
            start={[0.39, 0.94]}
            end={[0.7, 1]}
            locations={[0, 1]}
            colors={[theme.colors.blue_dark2, theme.colors.green]}
          >
            <ImageButton source={ClocksImage} resizeMode="contain" />
            <TextButton color={theme.colors.green}>Meus</TextButton>
            <TextButton2 color={theme.colors.green}>Timers</TextButton2>
          </GradientButton>
        </Button>
      </ContainerButtons>
      <TextInfo>Um app do grupo Soul</TextInfo>
    </Container>
  );
};

export default Home;
