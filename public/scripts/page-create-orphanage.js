// Create map
const map = L.map("mapid").setView([-12.9839491, -38.504271], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// Create and add markers

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remover icon
  marker && map.removeLayer(marker);

  // Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add photo field
function addPhotoField() {
  // Get photo container #images
  const container = document.querySelector("#images");

  // Get photo container to double .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Clone last added photo
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Verify blank field name
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // Erase infos
  newFieldContainer.children[0].value = "";

  // Add clone to html
  container.appendChild(newFieldContainer);
}

// Delete field
function deleteField(event) {
  // Get current button
  const span = event.currentTarget;

  // Get button father
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Verifiy fields number
  if (fieldsContainer.length <= 1) {
    // Clear field
    span.parentNode.children[0].value = "";
    return;
  }

  // Delete field
  span.parentNode.remove();
}

// Select yes or no button
function toggleSelect(event) {
  // Remove active class
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // Get current button and add active class
  const button = event.currentTarget;
  button.classList.add("active");

  // Update hidden input value
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
}

// Validate map selection
function validate(event) {
  const lat = document.querySelector('[name="lat"]').value
  const lng = document.querySelector('[name="lng"]').value


  console.log(lat, lng)

  event.preventDefault()
  alert('Selecione um ponto no mapa!')
}