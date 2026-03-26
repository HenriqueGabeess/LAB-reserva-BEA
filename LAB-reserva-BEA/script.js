/*function reservar() {
  let professor = document.getElementById("professor").value;
  let data = document.getElementById("data").value;
  let horario = document.getElementById("horario").value;

  let texto = professor + " - " + data + " - " + horario;

  let li = document.createElement("li");
  li.innerText = texto;

  document.getElementById("lista").appendChild(li);
}*/

/*let reservas = [];

function reservar() {
  let professor = document.getElementById("professor").value;
  let data = document.getElementById("data").value;
  let horario = document.getElementById("horario").value;

  let novaReserva = data + "-" + horario;

  for (let r of reservas) {
    if (r == novaReserva) {
      alert("Horário já reservado");
      return;
    }
  }

  reservas.push(novaReserva);

  let texto = professor + " - " + data + " - " + horario;
  let li = document.createElement("li");
  li.innerText = texto;
  document.getElementById("lista").appendChild(li);
}*/

let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

function reservar() {
  let professor = document.getElementById("professor").value;
  let data = document.getElementById("data").value;
  let horario = document.getElementById("horario").value;

  let novaReserva = data + " - " + horario + " - " + professor;

  if (reservas.includes(novaReserva)) {
    alert("Horário já reservado");
    return;
  }

  reservas.push(novaReserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));
  mostrarReservas();
}

function mostrarReservas() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let r of reservas) {
    let li = document.createElement("li");
    li.innerText = r;
    lista.appendChild(li);
  }
}

mostrarReservas();
