import { CardGrid } from '@vkontakte/vkui';
import React from 'react';
import LocationsItem from './LocationsItem';

function LocationsList({ locations }) {
  return (
    <CardGrid size="l">
      {locations.map(({ name, id }) => (
        <LocationsItem key={id} id={id}>
          {name}
        </LocationsItem>
      ))}
    </CardGrid>
  );
}

export default LocationsList;
