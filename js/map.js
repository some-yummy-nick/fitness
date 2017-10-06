ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: [55.702693, 37.499013],
			controls: [],
			zoom: 15
		}, {
			searchControlProvider: 'yandex#search'
		}),


		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
			// �����.
			// ���������� ������� ������ ��� ������.
			iconLayout: 'default#image',
			// ��� ����������� ������ �����.
			iconImageHref: '../images/map-pin.svg',
			// ������� �����.
			iconImageSize: [67, 87],
			// �������� ������ �������� ���� ������ ������������
			// � "�����" (����� ��������).
			iconImageOffset: [-5, -38]
		})
	myMap.behaviors.disable('scrollZoom');
	myMap.geoObjects
		.add(myPlacemark)
});