var posizioni = [];
posizioni["CopiaVerbania"] = new google.maps.LatLng(45.9390656,8.57494);
posizioni["CopiaArona"] = new google.maps.LatLng(45.7570879,8.5576672);
posizioni["CopiaTerni"] = new google.maps.LatLng(42.5598042,12.6451605);
posizioni["CopiaOmegna"] = new google.maps.LatLng(45.8779096,8.4064306);
posizioni["CopiaCastelFranco"] = new google.maps.LatLng(45.6831699,11.9400613);
var marker;
google.maps.event.addDomListener(window, 'load', initializeGMap("CopiaVerbania"));


function initializeGMap(posizione){
    var mapProp = {
      center:posizioni[posizione],
      zoom:16,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      scrollwheel: false,
      draggable: false
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker=new google.maps.Marker({
      position:posizioni[posizione],
      animation:google.maps.Animation.DROP
    });

    marker.setMap(map);
}

$(".positionPointer").click(function(e){
  var clicked = e.target;
  initializeGMap($(clicked).attr("pos"));
})
