import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
          }}
        />
        <Info>
          <Name>Mauro de Souza</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity>
        <Icon name="event-busy" size={20} color="#f64c76" />
      </TouchableOpacity>
    </Container>
  );
}
