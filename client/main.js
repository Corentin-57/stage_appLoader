import '../imports/ui/App.js';

var handle = LaunchScreen.hold();

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  navigator.splashscreen.show();
}

setTimeout(()=> {
  handle.release();
}, 5000);





