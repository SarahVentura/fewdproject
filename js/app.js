
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(38.246759, -85.536694),
    zoom: 14
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(38.246759, -85.536694),
    map: map
  });
}

function skyMap() {
  var skymapCanvas = document.getElementById("skymap");
  var skymapOptions = {
    center: new google.maps.LatLng(38.205840, -85.549786),
    zoom: 14
  };
  var skymap = new google.maps.Map(skymapCanvas, skymapOptions);
  var skymarker = new google.maps.Marker({
    position: new google.maps.LatLng(38.205840, -85.549786),
    map: map
  });
}
