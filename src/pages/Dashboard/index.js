import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import api from '~/services/api';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const isFocused = useIsFocused();

  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const { data } = await api.get('/appointments');

    setAppointments(data);
  };

  useEffect(() => {
    if (isFocused) loadAppointments();
  }, [isFocused]);

  const onCancel = async id => {
    const { data } = await api.delete(`/appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: data.canceled_at,
            }
          : appointment
      )
    );
  };

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => onCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}
