import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import LocationsList from '../components/LocationsList';

const Locations = ({ id, goListLocations }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={goListLocations} data-to="home" />}>
        Список локаций
      </PanelHeader>
      <LocationsList />
    </Panel>
  );
};

Locations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Locations;
