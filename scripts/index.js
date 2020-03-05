document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        console.log("xx")
        new WOW().init();
        const icon = L.icon({
            iconUrl: "./img/markerWolf.png",
            iconSize: [54, 54]
        });

        var map = L.map('map').setView([50.072358, 19.901357], 15);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([50.072358, 19.901357], {
            title: "Marker",
            icon: icon
        }).addTo(map);


    })
})

