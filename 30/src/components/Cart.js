import { Button, Card, CardGrid, Div, Group, Panel, Spacing, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import StartedGame from '../panels/StartedGame';
import Timer from '../panels/Timer';
import './Cart.css';
function Cart({ numberPlayer, locationItem, spy, viewedCart, timeEnd }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleViewing = () => {
    handleClick();
    viewedCart(true);
  };

  // console.log(activePanel);ss
  const changeActivePanel = () => {};
  return (
    <>
      {numberPlayer ? (
        <>
          <ReactCardFlip style={{ width: '100%' }} isFlipped={isFlipped} flipDirection="vertical">
            <CardGrid size="l">
              <Card mode="shadow" onClick={handleClick}>
                <Div
                  style={{
                    paddingBottom: '10%',
                    paddingTop: '10%',
                  }}>
                  Игрок номер {numberPlayer}
                </Div>
              </Card>
            </CardGrid>
            <CardGrid size="l">
              <Card mode="outline" onClick={handleViewing}>
                <Div
                  style={{
                    paddingBottom: '10%',
                    paddingTop: '10%',
                  }}>
                  {numberPlayer === spy ? 'Вы шпион' : locationItem.name}
                </Div>
              </Card>
            </CardGrid>
          </ReactCardFlip>
          <Spacing />
        </>
      ) : (
        <StartedGame timeEnd={timeEnd} />
      )}
    </>
  );
}

export default Cart;
