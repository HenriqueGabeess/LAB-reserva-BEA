function reservar() {
  let professor = document.getElementById("professor").value;
  let data = document.getElementById("data").value;
  let horario = document.getElementById("horario").value;

  let texto = professor + " - " + data + " - " + horario;

  let li = document.createElement("li");
  li.innerText = texto;

  document.getElementById("lista").appendChild(li);
}
