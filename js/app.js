
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
  var myCenter = new google.maps.LatLng(38.246759, -85.536694);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter,zoom: 14};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position: myCenter, animation:google.maps.Animation.BOUNCE});
  marker.setMap(map);
}
