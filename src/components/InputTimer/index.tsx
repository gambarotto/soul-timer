import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { MaskInputProps } from 'react-native-mask-input';
import {
  Container,
  Title,
  ContainerInput,
  Input,
  LineInput,
  AlertMessage,
  InputMask,
} from './styles';

interface Props extends MaskInputProps {
  title: string;
  typeInput: 'timer' | 'number';
  alertMessage?: string;
  value: string;
}

const InputTimer: React.FC<Props> = ({
  title,
  typeInput,
  alertMessage,
  value,
  ...rest
}) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const timerMask = [/[0-5]/, /[0-9]/, ':', /[0-5]/, /[0-9]/];

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  return (
    <Container>
      <Title>{title}</Title>
      <ContainerInput>
        <InputMask
          value={value}
          mask={typeInput === 'timer' && timerMask}
          placeholder={typeInput === 'timer' ? '-- : --' : '0'}
          placeholderTextColor={theme.colors.gray3}
          keyboardType="numeric"
          {...rest}
        />
        <LineInput isEmpty={value === ''} />
        {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
      </ContainerInput>
    </Container>
  );
};

export default InputTimer;
