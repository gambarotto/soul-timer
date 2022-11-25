import React, { useCallback, useState } from 'react';
import Button from '../../components/Button';
import ContainerBackground from '../../components/ContainerBackground';
import HeaderIconBack from '../../components/HeaderIconBack';
import InputTimer from '../../components/InputTimer';
import {
  Container,
  ContainerContent,
  TitlePage,
  ContainerTitle,
  Title,
  Icon,
  ContainerTotalTimer,
  TextTotalTimer,
  Time,
} from './styles';

const NewTimer: React.FC = () => {
  const [time, setTime] = useState('');
  const [sections, setSections] = useState('');
  const [breaks, setBreaks] = useState('');

  const [totalTimer, setTotalTimer] = useState('');

  const calculateTime = useCallback(() => {}, []);
  return (
    <ContainerBackground>
      <Container>
        <ContainerContent>
          <HeaderIconBack />
          <TitlePage>Temporizador</TitlePage>
          <ContainerTitle>
            <Title>Configurações</Title>
            <Icon name="clock-fast" size={24} />
          </ContainerTitle>
          <InputTimer
            title="Tempo"
            typeInput="timer"
            value={time}
            onChangeText={(masked, unmasked) => {
              setTime(unmasked);
            }}
          />
          <InputTimer
            title="Seções"
            editable={time !== ''}
            maxLength={2}
            typeInput="number"
            value={sections}
            onChangeText={(masked, unmasked) => {
              setSections(unmasked);
            }}
            alertMessage="10 seções de 01:00 min."
          />
          <InputTimer
            title="Intervalos"
            editable={Number(sections) > 0}
            value={Number(sections) > 0 ? breaks : ''}
            typeInput="timer"
            // eslint-disable-next-line no-unused-vars
            onChangeText={(masked, unmasked) => {
              setBreaks(unmasked);
            }}
            alertMessage="10 seções de 01:00 min."
          />
          <ContainerTotalTimer>
            <TextTotalTimer>Duração do temporizador</TextTotalTimer>
            <Time>10:00</Time>
          </ContainerTotalTimer>
        </ContainerContent>
        <Button title="Salvar" />
      </Container>
    </ContainerBackground>
  );
};

export default NewTimer;
