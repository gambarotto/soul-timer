import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { fontPixel, heightPixel } from '../../help/sizeCalculator';

export const Container = styled(RectButton)`
  height: ${heightPixel(50)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.comfortaa};
  font-size: ${fontPixel(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
