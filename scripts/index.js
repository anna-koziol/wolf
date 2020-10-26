document.addEventListener("DOMContentLoaded", function(event) {
    $(document).ready(function() {
        console.log("xx")
        new WOW().init();
        const icon = L.icon({
            iconUrl: "./img/markerWolf.png",
            iconSize: [54, 54]
        });

        var map = L.map('map').setView([50.059720, 19.942035], 12);
        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: "abcd",
                maxZoom: 19
            }
        ).addTo(map);

        L.marker([50.050929, 19.967731], {
            title: "Marker",
            icon: icon
        }).addTo(map);

        L.marker([50.072133, 19.900607], {
            title: "Marker",
            icon: icon
        }).addTo(map);



        var selectedClass = "";
        $(".filter").click(function() {
            selectedClass = $(this).attr("data-rel");
            $("#gallery-wolf").fadeTo(100, 0.1);
            $("#gallery-wolf div").not("." + selectedClass).fadeOut().removeClass('animation');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('animation');
                $("#gallery-wolf").fadeTo(300, 1);
            }, 300);
        });



    })
})