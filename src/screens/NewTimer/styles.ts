import styled from 'styled-components/native';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../help/sizeCalculator';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const ContainerContent = styled.View``;
export const TitlePage = styled.Text`
  margin-top: ${pixelSizeVertical(16)}px;
  margin-bottom: ${pixelSizeVertical(13)}px;
  font-family: ${({ theme }) => theme.fonts.comfortaa};
  font-size: ${fontPixel(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${pixelSizeVertical(24)}px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.comfortaa_bold};
  font-size: ${fontPixel(24)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const Icon = styled(MaterialCommunityIcon)`
  color: ${({ theme }) => theme.colors.blue_dark2};
  margin-top: ${pixelSizeVertical(10)}px;
  margin-left: ${pixelSizeHorizontal(12)}px;
`;
export const ContainerTotalTimer = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: ${pixelSizeVertical(50)}px;
`;
export const TextTotalTimer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.comfortaa_bold};
  font-size: ${fontPixel(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.comfortaa_bold};
  font-size: ${fontPixel(48)}px;
  color: ${({ theme }) => theme.colors.white};
`;
