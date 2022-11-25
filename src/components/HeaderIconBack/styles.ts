import styled from 'styled-components/native';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';

export const Container = styled.View``;
export const Icon = styled(MaterialCommunityIcon)`
  color: ${({ theme }) => theme.colors.white};
`;
