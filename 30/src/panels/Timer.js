import React from 'react';
import { Div, Panel, PanelHeader, FixedLayout } from '@vkontakte/vkui';
import Countdown from 'react-countdown';
import './Timer.css';
function Timer({ id, timeEnd }) {
  return (
    <Panel id={id}>
      <FixedLayout vertical="bottom">
        <Div className="TimerContainer">
          <h3>До конца игры:</h3>
          <Countdown date={Date.now() + timeEnd} className="Timer" />
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default Timer;
