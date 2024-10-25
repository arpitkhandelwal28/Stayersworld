const map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',  
      center: [-74.5, 40], 
      zoom: 3
});

map.addControl(new maplibregl.NavigationControl());
map.addControl(new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
}));

const marker = new maplibregl.Marker()
    .setLngLat([-74.5, 40]) 
    .addTo(map);

const popup = new maplibregl.Popup({ closeOnClick: false })
    .setLngLat([-74.5, 40])
    .setHTML('<h5>Exact location will be provided after booking!</h5>')
    .addTo(map);

    
    
    



 