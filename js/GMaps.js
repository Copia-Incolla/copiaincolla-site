var map,infowindow;
var posizioni = {
  "CopiaVerbania"     : [new google.maps.LatLng(45.9390656,8.57494), 			"<b>Copia&Incolla</b> di Verbania"],
  "CopiaArona"        : [new google.maps.LatLng(45.7570879,8.5576672), 		"<b>Copia&Incolla</b> di Arona"],
  "CopiaTerni"        : [new google.maps.LatLng(42.5598042,12.6451605), 	"<b>Copia&Incolla</b> di Terni"],
  "CopiaOmegna"       : [new google.maps.LatLng(45.8779096,8.4064306), 		"<b>Copia&Incolla</b> di Omegna"],
  "CopiaCastelFranco" : [new google.maps.LatLng(45.6831699,11.9400613), 	"<b>Copia&Incolla</b> di Castel Franco Veneto"],
	"CornerAzzate"			: [new google.maps.LatLng(45.7773975,8.7965561), 		"<b>Corner C&I</b> presso Proline SAS"],
	"CornerMagenta"			: [new google.maps.LatLng(45.464511,8.8825773), 		"<b>Corner C&I</b> presso Orta Telefonia"],
	"CornerGravellona"	: [new google.maps.LatLng(45.9251746,8.4286457), 		"<b>Corner C&I</b> presso Ecotoner"],
	"CornerCassano"			: [new google.maps.LatLng(45.6713496,8.8194182), 		"<b>Corner C&I</b> presso Foto Carluccia"],
	"CornerCastano"			: [new google.maps.LatLng(45.5514959,8.7752627), 		"<b>Corner C&I</b> presso CentoxCento phone"],
	"CornerLegnano"			: [new google.maps.LatLng(45.5955856,8.9142063), 		"<b>Corner C&I</b> presso CentoxCento phone"],
	"CornerArluno"			: [new google.maps.LatLng(45.5053578,8.942398), 		"<b>Corner C&I</b> presso Mastersi"],
	"CornerVodIntra"		: [new google.maps.LatLng(45.9362233,8.569285), 		"<b>Corner C&I</b> presso Vodafone (Intra)"],
	"CornerVodDomo"			: [new google.maps.LatLng(46.099462,8.2850653), 		"<b>Corner C&I</b> presso Vodafone (Domodossola)"],
	"CornerVodArona"		: [new google.maps.LatLng(45.7602917,8.5593297), 		"<b>Corner C&I</b> presso Vodafone (Arona)"],
	"CornerVodGrave"		: [new google.maps.LatLng(45.9314662,8.4367192), 		"<b>Corner C&I</b> presso Vodafone (Gravellona)"]
}


function initializeGMap(posizione){
    var mapProp = {
      center:posizioni[posizione][0],
      zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      scrollwheel: false,
      draggable: false
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);


    var marker=new google.maps.Marker({
      position:posizioni[posizione][0],
      title:"Negozio a "+posizioni[posizione][1]
    });

    var infowindow = new google.maps.InfoWindow({
      content: "<h4>" + posizioni[posizione][1] + "</h4>Premi su una via per visualizzarla sulla mappa."
    });

    marker.setMap(map);
    infowindow.open(map, marker);
}

function mapBig(){
	var bounds = new google.maps.LatLngBounds();

	var mapProp = {
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      scrollwheel: false,
      draggable: true
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

		$.each(posizioni, function(index, value){
			var marker = new google.maps.Marker({
				map:map,
				position:value[0],
				title:value[1],
				animation: google.maps.Animation.DROP,
				CopiaInc: index
			});

			bounds.extend(marker.position);
			marker.addListener('click', openInfoGlobalMap);
		});

		map.fitBounds(bounds);
		map.panToBounds(bounds);
}

function openInfoGlobalMap(){
	var marker = this;
	if(infowindow == null)
		infowindow = new google.maps.InfoWindow();
	infowindow.setContent("<h4>" + posizioni[marker["CopiaInc"]][1] + "</h4><a href='");
	infowindow.open(map, marker);
}

$(".positionPointer").click(function(e){
  var clicked = e.target;
  initializeGMap($(clicked).attr("pos"));
})
