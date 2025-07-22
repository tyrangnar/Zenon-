const lista = document.getElementById("inversiones");

function agregarInversion() {
    const nombre = document.getElementById("nombre").value;
    const monto = document.getElementById("monto").value;
    if (!nombre || !monto) return alert("Completa todos los campos");

    const li = document.createElement("li");
    li.textContent = `${nombre}: ${monto}`;
    lista.appendChild(li);

    document.getElementById("nombre").value = "";
    document.getElementById("monto").value = "";
}
