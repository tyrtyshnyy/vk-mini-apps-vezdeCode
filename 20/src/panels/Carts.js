import { Div, Panel, PanelHeader, FixedLayout } from '@vkontakte/vkui';
import React, { useState } from 'react';
import Cart from '../components/Cart';
import { v4 as uuid } from 'uuid';
function Carts({ id, spy, players, locationItem }) {
  const [countPlayer, setCountPlayer] = useState(0);
  if (!players.length) {
    return null;
  }
  const viewedCart = (viewed) => {
    if (viewed) {
      setCountPlayer((prev) => prev + 1);
    }
  };
  return (
    <Panel id={id}>
      <PanelHeader>Выберите карточку</PanelHeader>
      <Cart
        key={uuid()}
        numberPlayer={players && players[countPlayer]}
        locationItem={locationItem}
        spy={spy}
        viewedCart={viewedCart}
      />
    </Panel>
  );
}

export default Carts;
