import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../help/sizeCalculator';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding-top: ${getStatusBarHeight() + pixelSizeVertical(20)}px;
  padding-left: ${pixelSizeHorizontal(20)}px;
  padding-right: ${pixelSizeHorizontal(20)}px;
  padding-bottom: ${pixelSizeVertical(20)}px;
`;
