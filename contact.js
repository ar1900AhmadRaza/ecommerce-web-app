// Contact Form Submission
const form = document.getElementById('contactForm');
const responseText = document.getElementById('formResponse');

form.addEventListener('submit', function(e){
  e.preventDefault(); // Prevent default form submission
  responseText.textContent = "Thank you! Your message has been sent.";
  form.reset(); // Clear form fields
});

// Google Map with User Current Location
function initMap() {
  const mapContainer = document.getElementById('map');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const map = new google.maps.Map(mapContainer, {
        zoom: 15,
        center: userLocation
      });

      new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "You are here!"
      });
    }, error => {
      mapContainer.innerHTML = "Unable to fetch your location.";
    });
  } else {
    mapContainer.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Load Google Maps Script dynamically
const script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
script.async = true;
document.head.appendChild(script);
