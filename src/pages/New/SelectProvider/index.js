import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

import api from '~/services/api';
import { Container, List, Wrapper, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const loadProviders = async () => {
      const { data } = await api.get('/providers');

      setProviders(data);
    };

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <List
          horizontal={false}
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Wrapper
              onPress={() =>
                navigation.navigate('SelectTimeDate', { provider })
              }
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatars/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Wrapper>
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
