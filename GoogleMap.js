	
		function myMap()
		{
		  myCenter=new google.maps.LatLng(59.247700, 18.136221);
		  var mapOptions= {
				center:myCenter,
				zoom:16, scrollwheel: true, draggable: true,
				mapTypeId: google.maps.MapTypeId.HYBRID
				/*mapTypeId:google.maps.MapTypeId.SATELLITE*/
		  };
		  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

		  var marker = new google.maps.Marker({
				position: myCenter,
		  });
		  marker.setMap(map);
		  }