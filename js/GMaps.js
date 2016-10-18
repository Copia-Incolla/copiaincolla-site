var marker;
var posizioni = {
  "CopiaVerbania"     : [new google.maps.LatLng(45.9390656,8.57494), "Verbania"],
  "CopiaArona"        : [new google.maps.LatLng(45.7570879,8.5576672), "Arona"],
  "CopiaTerni"        : [new google.maps.LatLng(42.5598042,12.6451605), "Terni"],
  "CopiaOmegna"       : [new google.maps.LatLng(45.8779096,8.4064306), "Omegna"],
  "CopiaCastelFranco" : [new google.maps.LatLng(45.6831699,11.9400613), "Castel Franco Veneto"]
}

$(function() {
  initializeGMap("CopiaVerbania");
});


function initializeGMap(posizione){
    var mapProp = {
      center:posizioni[posizione][0],
      zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      scrollwheel: false,
      draggable: false
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);


    var marker=new google.maps.Marker({
      position:posizioni[posizione][0],
      title:"Negozio a "+posizioni[posizione][1]
    });

    var infowindow = new google.maps.InfoWindow({
      content: "<h4><b>Copia&Incolla</b> di " + posizioni[posizione][1] + "</h4>Premi su una via per visualizzarla sulla mappa."
    });

    marker.setMap(map);
    infowindow.open(map, marker);
}

$(".positionPointer").click(function(e){
  var clicked = e.target;
  initializeGMap($(clicked).attr("pos"));
})
