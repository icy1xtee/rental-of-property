// const yaMapsSkript = document.getElementById('yandexmap');

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  // Иницилиазируем карту

  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById('yandexmap'),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [30.309158, 59.937738],

        // Уровень масштабирования
        zoom: 12,
      },
    }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
  const defaultFeaturesLayer = new YMapDefaultFeaturesLayer();
  // add to map

  map.addChild(defaultFeaturesLayer);

  const markerElement = document.createElement('div');
  markerElement.style =
    'background-color: Lime; width: 10px; height: 10px; border-radius: 5px; border: solid 0.3rem; border-color: black';
  markerElement.className = 'marker-class';
  markerElement.innerText = '';

  const marker = new YMapMarker(
    {
      // source: 'markerSource',
      coordinates: [30.309158, 59.937738],
      draggable: true,
      mapFollowsOnDrag: true,
    },
    markerElement
  );

  map.addChild(marker);
}

initMap();
