//create map
const map = L.map("mapid").setView([-27.2109325, -49.6448719], 15);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

//create and add marker

let marker; //em qualquer momento da aplicação pode ser alterado

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //limpar o campo antes de adicionar imagens
  const input = newFieldContainer.children[0];

  //verificar se o campo estiver vazio, caso esteja, nao adicionar ao container de imagens
  if (input.value == "") {
    return;
  }

  input.value = "";

  //adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

//deletar imagem
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//selecionar (sim/não    )
function toggleSelect(event) {

  // retirar a class .active (dos botoes)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // colocar  a class .active no botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}

// function validate(event) {
//   //validar se lat e lng estão preenchidos (usar doc.queryselector e ver se value = '')
//   const needsLatandLng = true;
//   if (needsLatandLng) {
//     event.preventDefault()
//   }

  
// }
