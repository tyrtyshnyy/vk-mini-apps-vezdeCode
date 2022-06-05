import {
  Button,
  Card,
  CardGrid,
  Div,
  FormItem,
  FormLayout,
  Input,
  Panel,
  PanelHeader,
  View,
} from '@vkontakte/vkui';
import React, { useState } from 'react';
import Locations from './Locations';

const statuses = {
  default: 'default',
  error: 'error',
};

function Home({ id, creatingGame }) {
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState(statuses.default);
  const [activePanel, setActivePanel] = useState('home');
  const changeNumber = (value) => {
    if (value > 8 || value < 2) {
      setStatus(statuses.error);
    }
  };
  const createGame = (event) => {
    if (event) event.preventDefault();
    if (!number.trim().length || number > 8 || number < 2) {
      setStatus(statuses.error);
      return;
    }
    creatingGame(number);
  };
  const goListLocations = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };
  return (
    <View activePanel={activePanel}>
      <Panel id={id}>
        <PanelHeader>Шпион</PanelHeader>
        <Div>
          <CardGrid size="l">
            <Card mode="shadow">
              <FormLayout onSubmit={createGame}>
                <FormItem
                  top="Введите количество игроков"
                  status={status}
                  bottom={
                    (number > 8 && 'Максимальное количество игроков - 8') ||
                    (number && number < 2 && 'Минимальное количество игроков - 2')
                  }>
                  <Input
                    autoFocus={true}
                    type="number"
                    name="number"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                      changeNumber(e.target.value);
                    }}
                  />
                </FormItem>
                <FormItem>
                  <Button onClick={createGame} stretched size="m">
                    Начать игру
                  </Button>
                </FormItem>
              </FormLayout>
            </Card>
          </CardGrid>
          <Div>
            <Button
              style={{ marginTop: '30px' }}
              size="l"
              mode="secondary"
              onClick={() => setActivePanel('locations')}>
              Список локаций
            </Button>
          </Div>
        </Div>
      </Panel>
      <Locations id="locations" goListLocations={goListLocations} />
    </View>
  );
}

export default Home;
