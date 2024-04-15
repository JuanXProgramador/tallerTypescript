import { series } from './data.js';
var seriesTable = document.getElementById("series");
var tarjetaTable = document.getElementById("cartaseries");
mostrarSeries(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td><span class=\"serie-link\" data-toggle=\"modal\" data-target=\"#serieModal").concat(serie.id, "\">").concat(serie.name, "</span></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        var serieNameElement = trElement.querySelector('.serie-link');
        serieNameElement.addEventListener('click', function () {
            mostrarTarjeta(serie);
        });
        seriesTbody.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    var seasonsAverageCell = document.getElementById("seasonsAverage");
    seasonsAverageCell.textContent = "Seasons average: ".concat(promedioSeasons(series));
    seriesTable.appendChild(seriesTbody);
    /*
    let serieLinks: NodeListOf<Element> = document.querySelectorAll(".serie-link");
    serieLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            let serieId = parseInt((event.target as HTMLElement).getAttribute("data-id")!);
            mostrarTarjeta(series[1]);
        });
    });*/
}
function mostrarTarjeta(serie) {
    tarjetaTable.removeChild(tarjetaTable.lastChild);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<div class=\"card\">\n            <div class=\"card-body text-center py-4\">\n            <img src=".concat(serie.image, " class=\"img-fluid\" alt=\"Responsive image\">\n            <h4 class=\"card-title\">").concat(serie.name, "</h4>\n            <p class=\"card-text\">").concat(serie.synopsis, "</p>\n            <a href=").concat(serie.link, ">").concat(serie.link, "</a>\n            </div></div>");
    tarjetaTable.appendChild(trElement);
}
function promedioSeasons(series) {
    var promedio = 0;
    var n = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        promedio += serie.seasons;
        n++;
    }
    return promedio / n;
}
