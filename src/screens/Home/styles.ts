import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../help/sizeCalculator';

interface TextButtonProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  padding: ${pixelSizeHorizontal(20)}px;

  background-color: ${({ theme }) => theme.colors.blue_dark};
`;

export const Logo = styled.Image`
  width: ${widthPixel(150)}px;
  height: ${heightPixel(101.61)}px;
  margin-top: ${pixelSizeVertical(70)}px;
`;
export const Phrase = styled.Text`
  margin-top: ${pixelSizeVertical(62)}px;
  margin-bottom: ${pixelSizeVertical(8)}px;
  font-family: ${({ theme }) => theme.fonts.play};
  font-size: ${fontPixel(16)}px;
  color: ${({ theme }) => theme.colors.pink};
`;
export const ContainerButtons = styled.View`
  width: 100%;
`;
export const Button = styled.TouchableOpacity``;
export const GradientButton = styled(LinearGradient)`
  width: 100%;
  height: ${heightPixel(140)}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue_dark2};
  margin-top: ${pixelSizeVertical(12)}px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const ImageButton = styled.ImageBackground`
  height: 100%;
  width: ${widthPixel(220)}px;
  align-self: flex-end;
`;
export const TextButton = styled.Text<TextButtonProps>`
  position: absolute;
  font-size: ${fontPixel(16)}px;
  font-family: ${({ theme }) => theme.fonts.play};
  color: ${({ color }) => color};
  left: ${pixelSizeHorizontal(20)}px;
  top: ${pixelSizeVertical(20)}px;
`;
export const TextButton2 = styled.Text<TextButtonProps>`
  position: absolute;
  font-size: ${fontPixel(24)}px;
  font-family: ${({ theme }) => theme.fonts.play};
  color: ${({ color }) => color};
  left: ${pixelSizeHorizontal(20)}px;
  top: ${pixelSizeVertical(35)}px;
`;
export const TextInfo = styled.Text`
  font-size: ${fontPixel(12)}px;
  font-family: ${({ theme }) => theme.fonts.play};
  color: ${({ theme }) => theme.colors.gray3};
  margin-top: ${pixelSizeVertical(20)}px;
`;
