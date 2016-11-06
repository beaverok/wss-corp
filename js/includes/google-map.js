function g_map ()
{
    var maps = $('.contacts-page__map');

    maps.each(function() {
        var current_map = $(this);
        var latlng = new google.maps.LatLng(current_map.attr('data-longitude'), current_map.attr('data-latitude'));
        //var latlngmarker = new google.maps.LatLng(current_map.attr('data-marker-longitude'), current_map.attr('data-marker-latitude'));
        var point = current_map.attr('data-marker');

        var myOptions = {
            zoom: 17,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            panControl: true,
            zoomControl: true,
            disableDefaultUI: false
        };

        var stylez = [
            {
                featureType: "all",
                elementType: "all",
                stylers: [
                    { saturation: -100 } // <-- THIS
                ]
            }
        ];

        var map = new google.maps.Map(current_map[0], myOptions);

        var marker = new google.maps.Marker({
            map: map,
            icon: {
                size: new google.maps.Size(208, 102),
                origin: new google.maps.Point(0, 0),
                //anchor: new google.maps.Point(100, 50),
                url: point
            },
            position: latlng
        });
        map.panBy(0,0);

        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    });
};

google.maps.event.addDomListener(window, 'load', g_map);