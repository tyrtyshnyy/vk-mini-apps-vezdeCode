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

import Locations from './panels/Locations';

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

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        setScheme(data.scheme);
      }
    });
  }, []);

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel={activePanel}>
                <Locations id="home" locations={locations} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
