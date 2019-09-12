//Camera
$(document).on("click", "#camera", function(){
  navigator.camera.getPicture(onSuccess, onFail, {
    quality:100,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
  });

  function onSuccess(imageURI) {
    var image = document.getElementById("image");
    image.src = imageURI;
  }

  function onFail(message) {
    navigator.notification.alert("Falhou pois: " + message);
  }
});

//Filtro
  document.getElementById("image").style.filter = "blur(5px)"
  document.getElementById("image").style.filter = "grayscale(50%)"
  document.getElementById("image").style.filter = "opacity(25%)"
  document.getElementById("image").style.filter = "saturate(30%)"


//Local
$(document).on("click", "#local", function(){
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});