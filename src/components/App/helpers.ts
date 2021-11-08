export const INITIAL_PARAMS = {
  lng: 139.70133999999996,
  lat: 35.65903999999999,
  zoom: 16,
  pitch: 50,
  bearing: -10,
  antialias: true
};

export const LAYOUT_PARAMS = {
  'icon-image': ['get', 'icon'],
  'icon-size': [
    'interpolate',
    ['exponential', 1.5],
    ['zoom'],
    10, 0.5, // zoom is 10 (or less)    -> icon size will be 0.5
    16, 1.0, // zoom is 16 (or greater) -> icon size will be 1.0
  ],
  'text-field': ['get', 'name_ja'],
  'text-anchor': 'top',
  'text-size': [
    'interpolate',
    ['exponential', 1.5],
    ['zoom'],
    10, 9,
    16, 12,
  ]
};

export const PAINT_PARAMS = {
  'text-color': '#6e523c',
  'text-halo-color': '#f1f1f1',
  'text-halo-width': 1.0,
  'icon-halo-color': '#6e523c',
  'icon-halo-width': 1.5,
  'text-translate': [
    'interpolate',
    ['exponential', 1.5],
    ['zoom'],
    10,
    ['literal', [0.0, 12.0]],
    16,
    ['literal', [0.0, 24.0]],
  ],
  'text-translate-anchor': 'viewport',
  'text-opacity': [
    'step',
    ['zoom'],
    0,
    14,
    1
  ]
};

export const FILTER = [
  'all',
  ['>=', ['zoom'], ['get', 'min_zoom']],
];
