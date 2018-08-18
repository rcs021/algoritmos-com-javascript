var mymap = L.map('mapid').setView([-12.9190982,-38.4291687], 11.2);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
   '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
   'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
 }).addTo(mymap);

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
  console.log(position.coords.latitude);
    var maker2 = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
}
