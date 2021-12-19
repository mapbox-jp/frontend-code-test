import ReactDOM from 'react-dom';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Popup from '../Popup';
import { INITIAL_PARAMS, LAYOUT_PARAMS, PAINT_PARAMS, FILTER } from './helpers';
import { Container } from './styles';
import { GEOJSON } from './geojson';

mapboxgl.accessToken = 'MAPBOX_TOKEN';

const App: React.FC = () => {
  const mapRef = useRef(null);
  const popupRef = useRef<mapboxgl.Popup>(null);
  const [_map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current as any,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [INITIAL_PARAMS.lng, INITIAL_PARAMS.lat],
      zoom: INITIAL_PARAMS.zoom,
    });

    const showPopup = (feature: mapboxgl.MapboxGeoJSONFeature) => {
      const properties = feature.properties;
      const coordinates = (feature.geometry as any).coordinates.slice();
      const popupClass = `mapbox-promoted-popup-adid__${properties.adid}`;
      const popupHlement = document.querySelector(`.${popupClass}`);
      if (popupHlement) { return; }
      const popupContentClass = `mapbox-promoted-popup-content-adid__${properties.adid}`;

      new mapboxgl.Popup({
        closeOnClick: false,
        closeButton: false,
        className: `mapbox-promoted-popup ${popupClass}`,
      }).setLngLat(coordinates)
        .setHTML(`<div class="${popupContentClass}" />`)
        .addTo(map);

      ReactDOM.render(
        <Popup feature={feature} ref={popupRef} />,
        document.querySelector(`.${popupContentClass}`)
      );        
    };

    map.on('load', () => {
      map.addSource('promotion-source', {
        type: 'geojson',
        data: GEOJSON as any,
      });
      map.addLayer({
        id: 'promotion-layer',
        type: 'symbol',
        source: 'promotion-source',
        layout: LAYOUT_PARAMS as any,
        paint: PAINT_PARAMS as any,
        filter: FILTER,
      });
      map.on('styleimagemissing', (event: any) => {
        map.loadImage(event.id, (error?: Error, image?: HTMLImageElement | ImageBitmap) => {
          if (error) { throw error; }
          if (!image) { throw new Error('getting image failed.'); }
          map.addImage(event.id, image);
        });
      });
      map.on('preclick', () => {
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });
      map.on('click', 'promotion-layer', (event: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] | undefined; } & mapboxgl.EventData) => {
        const feature = event.features && event.features[0];
        if (!feature) { return; }
        event.originalEvent.preventDefault();
        event.originalEvent.stopPropagation();
        if (feature.properties.type === 'popup') {
          showPopup(feature);
        }
      });
      map.addControl(new mapboxgl.NavigationControl({
        visualizePitch: true,
      }));
      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
      }));
    });
    setMap(map);

    return () => {
      map.remove();
    }
  }, []);

  return (
    <Container ref={mapRef} />
  );
}

export default App;
