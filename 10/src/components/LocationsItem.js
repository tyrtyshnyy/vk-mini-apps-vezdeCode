import { Card, Div } from '@vkontakte/vkui';
import React from 'react';

function LocationsItem({ children }) {
  return (
    <Card>
      <Div>{children}</Div>
    </Card>
  );
}

export default LocationsItem;
