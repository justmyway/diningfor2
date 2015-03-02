<script type="text/javascript" charset="utf-8">

// Wait for device API libraries to load
//
document.addEventListener("deviceready", getGeoLocation, false);

// device APIs are available
//
function getGeoLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                        'Longitude: '         + position.coords.longitude        + '<br />' +
                        'Altitude: '          + position.coords.altitude         + '<br />' +
                        'Accuracy: '          + position.coords.accuracy         + '<br />' +
                        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                        'Heading: '           + position.coords.heading          + '<br />' +
                        'Speed: '             + position.coords.speed            + '<br />' +
                        'Timestamp: '         + position.timestamp               + '<br />';
    alert('bam');
}

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

</script>