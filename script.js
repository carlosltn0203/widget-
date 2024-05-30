$(document).ready(function() {
    $("#fecha").datepicker();

    $("#buscarDisponibilidad").click(function() {
        var fechaSeleccionada = $("#fecha").val();

        $.ajax({
            url: "https://raw.githubusercontent.com/tu-usuario/tu-repositorio-api/main/disponibilidad.json",
            method: "GET",
            dataType: "json", // Especifica que esperas recibir un JSON
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
