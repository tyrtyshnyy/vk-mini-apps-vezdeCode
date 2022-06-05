import { CardGrid } from '@vkontakte/vkui';
import React from 'react';
import LocationsItem from './LocationsItem';
const locations = [
  { id: 1, name: 'Дом' },
  { id: 2, name: 'Квартира' },
  { id: 3, name: 'Церковь' },
  { id: 4, name: 'Казино' },
  { id: 5, name: 'Банк' },
  { id: 6, name: 'Киностудия' },
  { id: 7, name: 'Овощебаза' },
];

function LocationsList() {
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
