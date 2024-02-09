// const yaMapsSkript = document.getElementById('yandexmap');

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

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
        zoom: 10,
      },
    }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
  const defaultFeaturesLayer = new YMapDefaultFeaturesLayer();
  // add to map
  map.addChild(defaultFeaturesLayer);
}

initMap();
