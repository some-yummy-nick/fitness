ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: [55.702693, 37.499013],
			controls: [],
			zoom: 15
		}, {
			searchControlProvider: 'yandex#search'
		}),


		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: '../images/map-pin.svg',
			// Размеры метки.
			iconImageSize: [67, 87],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-5, -38]
		})
	myMap.behaviors.disable('scrollZoom');
	myMap.geoObjects
		.add(myPlacemark)
});