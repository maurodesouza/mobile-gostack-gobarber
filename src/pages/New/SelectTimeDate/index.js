import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import api from '~/services/api';
import { Container, HourList, Hour, Time } from './styles';

export default function SelectTimeDate({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const { provider } = route.params;

  useEffect(() => {
    const loadHours = async () => {
      const { data } = await api.get(`/providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(data);
    };

    loadHours();
  }, [date, provider.id]);

  const handleNavigation = time =>
    navigation.navigate('Confirm', { provider, time });

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          horizontal={false}
          data={hours}
          keyExtractor={hour => hour.time}
          renderItem={({ item }) => (
            <Hour
              enabled={item.available}
              onPress={() => handleNavigation(item.date)}
            >
              <Time>{item.time}</Time>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectTimeDate.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};
