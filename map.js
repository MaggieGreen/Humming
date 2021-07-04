function initMap() {

    var image = 'image/location.png';


    var union = {
        info: '<div class="historyOne"><img src="image/bird_1.jpg" alt="history-one"></div> <br> <strong>San Francisco Parkside Square</strong><br>\
					Thu 6:26PM <br>Beautiful hummingbirds in the flowers..<br>\
					<a href="#detailPage1" data-transition="slide">Get More Information</a>',
        lat: 37.739,
        long: -122.48294,
        icon: image
    };

    var fremont = {
        info: '<div class="historyOne"><img src="image/bird_2.jpg" alt="history-one"></div> <br> <strong>Golden Gate Park</strong><br>\
					Two hummingbirds in the flowers...<br>\
					<a href="#detailPage2" data-transition="slide">Get More Information</a>',
        lat: 37.76599,
        long: -122.46644,
        icon: image
    };

    var newark = {
        info: '<div class="historyOne"><img src="image/bird_3.jpg" alt="history-one"></div> <br> <strong>Fort Winfield Scott</strong><br>\r\
					I think I saw a beautiful Anna Hummingbird...<br>\
					<a href="#detailPage3" data-transition="slide">Get More Information</a>',
        lat: 37.79819,
        long: -122.47269,
        icon: image
    };

    var locations = [
        [union.info, union.lat, union.long, 0],
        [fremont.info, fremont.lat, fremont.long, 1],
        [newark.info, newark.lat, newark.long, 2],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(37.76599, -122.46644),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        // **
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d5c62a'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d5d34f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#6f8bb5'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#a01820'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#4e93d5'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
        // **
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}