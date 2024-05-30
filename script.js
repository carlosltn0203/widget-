$(document).ready(function() {
    $("#fecha").datepicker();

    $("#buscarDisponibilidad").click(function() {
        var fechaSeleccionada = $("#fecha").val();

        $.ajax({
            url: "https://carlosltn0203.github.io/json-/api/dummy",
            method: "GET",
            data: { fecha: fechaSeleccionada },
            success: function(data) {
                mostrarDisponibilidad(data);
            },
            error: function() {
                alert("Error al obtener la disponibilidad");
            }
        });
    });

    function mostrarDisponibilidad(data) {
        var resultadoHTML = "<h2>Disponibilidad para " + data.fecha + "</h2>";
        resultadoHTML += "<ul>";

        $.each(data.personal_disponible, function(index, empleado) {
            resultadoHTML += "<li>";
            resultadoHTML += "<strong>Nombre:</strong> " + empleado.nombre + "<br>";
            resultadoHTML += "<strong>Horario:</strong> " + empleado.horarios.join(", ") + "<br>";
            resultadoHTML += "<strong>ID:</strong> " + empleado.id;
            resultadoHTML += "</li>";
        });

        resultadoHTML += "</ul>";

        $("#resultado").html(resultadoHTML);
    }
});
