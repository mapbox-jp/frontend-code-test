import React from 'react';
import { Container } from './styles';

import './assets/style.css';

export const ICON_TYPE = {
  BOOKMARK: 'icon-bookmark',
  CALENDAR: 'icon-calendar',
  CARET_DOWN: 'icon-caret-down',
  CARET_LEFT: 'icon-caret-left',
  CARET_RIGHT: 'icon-caret-right',
  CARET_UP: 'icon-caret-up',
  CHEVRON_DOWN: 'icon-chevron-down',
  CHEVRON_LEFT: 'icon-chevron-left',
  CHEVRON_RIGHT: 'icon-chevron-right',
  CHEVRON_UP: 'icon-chevron-up',
  CLOCK: 'icon-clock',
  EARTH: 'icon-earth',
  LOCATION_ARROW: 'icon-location-arrow',
  MAP_MARKER: 'icon-map-marker',
  MAP_MARKER_ALT: 'icon-map-marker-alt',
  PHONE: 'icon-phone',
  QUESTION: 'icon-question',
  QUESTION_CIRCLE: 'icon-question-circle',
  ROUTE: 'icon-route',
  SEARCH: 'icon-search',
  SHIELD_CHECK: 'icon-shield-check',
  TIMES: 'icon-times',
}

export type IconType = typeof ICON_TYPE[keyof typeof ICON_TYPE];

type TProps = {
  type: IconType;
  size?: string;
  color?: string;
}

const Icon: React.FC<TProps> = props => {
  const { type, size, color } = props;
  return (
    <Container
      className={`icon ${type}`}
      size={size}
      color={color}
    />
  );
}

export default Icon
