import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';
import { fontPixel, pixelSizeVertical } from '../../help/sizeCalculator';

interface LineProps {
  isEmpty: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${pixelSizeVertical(8)}px;
  height: 70px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.comfortaa};
  font-size: ${fontPixel(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const ContainerInput = styled.View`
  width: 150px;
  height: 100%;
`;
export const Input = styled.TextInput`
  height: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.comfortaa};
  font-size: ${fontPixel(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const InputMask = styled(MaskInput)`
  height: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.comfortaa};
  font-size: ${fontPixel(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const LineInput = styled.View<LineProps>`
  height: 1px;
  background-color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.colors.gray3 : theme.colors.pink};
`;
export const AlertMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.comfortaa};
  font-size: ${fontPixel(11)}px;
  color: ${({ theme }) => theme.colors.gray3};
  text-align: right;
`;
