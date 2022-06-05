import { Card, Div } from '@vkontakte/vkui';
import React from 'react';

function LocationsItem({ children }) {
  return (
    <Card>
      <Div className="DestItemContent">{children}</Div>
    </Card>
  );
}

export default LocationsItem;
