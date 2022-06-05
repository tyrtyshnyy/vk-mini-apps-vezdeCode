import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader } from '@vkontakte/vkui';
import LocationsList from '../components/LocationsList';

const Locations = ({ id, locations }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Список локаций</PanelHeader>
      <LocationsList locations={locations} />
    </Panel>
  );
};

Locations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Locations;
