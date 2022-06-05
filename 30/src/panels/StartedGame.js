import { Div, FixedLayout, Group, Panel } from '@vkontakte/vkui';
import React from 'react';
import './StartedGame.css';
import Timer from './Timer';
function StartedGame({ id, timeEnd }) {
  return (
    <>
      <Group>
        <Div className="StartedGame">
          <h2>Игра началась!</h2>
        </Div>
      </Group>
      <Timer timeEnd={timeEnd} />
    </>
  );
}

export default StartedGame;
