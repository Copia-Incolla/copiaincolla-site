var myCenter=new google.maps.LatLng(45.9390656,8.57494);
var marker;
google.maps.event.addDomListener(window, 'load', initializeGMap);


function initializeGMap(){
    var mapProp = {
      center:myCenter,
      zoom:16,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      scrollwheel: false, 
      draggable: false
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.DROP
    });

    marker.setMap(map);
  }