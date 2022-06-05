import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Carts from './panels/Carts';
import { createCarts, randomItem, randomNumber, toms } from './helpers/helpers';
import Timer from './panels/Timer';

const locations = [
  { id: 1, name: 'Дом' },
  { id: 2, name: 'Квартира' },
  { id: 3, name: 'Церковь' },
  { id: 4, name: 'Казино' },
  { id: 5, name: 'Банк' },
  { id: 6, name: 'Киностудия' },
  { id: 7, name: 'Овощебаза' },
];

const App = () => {
  const [scheme, setScheme] = useState('bright_light');
  const [activePanel, setActivePanel] = useState('home');

  const [players, setPlayers] = useState([]);
  const [spy, setSpy] = useState(null);
  const [locationItem, setLocationItem] = useState(null);
  const timeEnd = toms(players[players.length - 1]);
  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        setScheme(data.scheme);
      }
    });
  }, []);

  const creatingGame = (number) => {
    const playersNumber = createCarts(number);
    const spyNumber = randomNumber(playersNumber[0], playersNumber[playersNumber.length - 1]);
    const randomLocations = randomItem(locations);
    setPlayers(playersNumber);
    setSpy(spyNumber);
    const locationIt = locations[randomLocations];
    setLocationItem(locationIt);
    setActivePanel('carts');
  };

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id="home" creatingGame={creatingGame} />
                <Carts
                  id="carts"
                  players={players}
                  spy={spy}
                  locations={locations}
                  locationItem={locationItem}
                  timeEnd={timeEnd}
                />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
